import { Toaster as RadToaster } from "sonner";

export function Toaster() {
    return (
        <RadToaster
            position='bottom-center'
            toastOptions={{
                style: {
                    background: '#030303',
                    color: 'white',
                    border: '1px solid #27272a'
                }
            }}
        />
    )
}