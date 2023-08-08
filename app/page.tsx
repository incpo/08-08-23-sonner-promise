"use client"
import {toast} from "sonner";
import {Toaster} from "@/app/components/Toaster";
import {useState} from "react";



export default function Home() {
  const [status,setStatus] = useState<number | undefined>()
  function fetchData(url: string) {
    const promise = fetch(url)
    toast.promise(promise, {
      loading: 'Loading...',
      success: (data) => {
        setStatus(data.status)
        return "Success"
      }, //if we try to change success as string then result will be the same
      error: 'Error'
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
      <p className='max-w-xl'>The problem is that the success function is executed in any case, regardless of whether the promise was fulfilled or rejected. </p>
      <Toaster/>
    </main>
  )
}
