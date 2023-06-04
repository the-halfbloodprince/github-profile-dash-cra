import { useEffect, useState } from "react";

interface Params<T> {
    nonDebouncedValue: T;
    setDebouncedValue: (arg0: T) => void;
}

export const useDebouncedValue = ({ 

    nonDebouncedValue: usernameVal,
    setDebouncedValue: setUsername

 }: Params<string>) => {

    const [isTyping, setIsTyping] = useState<boolean>(false)

    useEffect(() => {

        
        setIsTyping(true)

        const duration = 500
    
        const timer = setTimeout(() => {
            setIsTyping(false)
            setUsername(usernameVal)
        }, duration)
    
        return () => {
            // setIsTyping(false)
            clearTimeout(timer)
        }
    
    }, [usernameVal])

    return isTyping

}