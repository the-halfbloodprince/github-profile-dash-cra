import { useEffect } from "react";

interface Params<T> {
    nonDebouncedValue: T;
    setDebouncedValue: (arg0: T) => void;
}

export const useDebouncedValue = ({ 

    nonDebouncedValue: usernameVal,
    setDebouncedValue: setUsername

 }: Params<string>) => {

    useEffect(() => {

        const duration = 500
    
        const timer = setTimeout(() => {
          setUsername(usernameVal)
        }, duration)
    
        return () => {
          clearTimeout(timer)
        }
    
    }, [usernameVal])

}