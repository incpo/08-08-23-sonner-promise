"use client"
import {toast} from "sonner";
import {Toaster} from "@/app/components/Toaster";
import {useState} from "react";
import {set} from "zod";



export default function Home() {
  const [status,setStatus] = useState<number | undefined>()
  function fetchData(url: string) {
    const promise = fetch(url)
    toast.promise(promise, {
      loading: 'Loading...',
      success: (data) => {
        if(!data.ok) throw new Error()
        setStatus(data.status)
          return 'Success'
      },
      error: () => {
        setStatus(404)
        return 'Error'
      }
    })
  }

  return (
    <main className="flex min-h-screen flex-col space-y-3 l items-center justify-center p-24 text-center">
      <h1 className='text-2xl font-medium'>Status: {status ?? 'undefined'}</h1>
      <div className='flex space-x-3'>
        <div>
          <button onClick={()=> fetchData('https://jsonplaceholder.typicode.com/users')} className='px-2 py-1 border border-[#27272a] items-center'>Fetch success</button>
        </div>
        <div>
          <button onClick={()=> fetchData('anyInvalidUrlOrResponse')} className='px-2 py-1 border border-[#27272a] items-center'>Fetch error</button>
        </div>
      </div>
        <p className='max-w-2xl mb-5'>This is an example of how I solved my own problem by studying it in more detail. Initially, I wanted to report a bug that was bothering me. But having studied in more detail how Promises works and what turns out to be fetch promise will not return reject() in any case. So I realized that I need to do a check inside onSuccess and in case of an error, call throw new error().</p>
      <p className='max-w-xl'>This is how I commented my resolved problem: The problem is that the success function is executed in any case, regardless of whether the promise was fulfilled or rejected. </p>
      <Toaster/>
    </main>
  )
}
