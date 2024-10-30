import { useState, useEffect } from 'react'
import { useAuthContext } from './UseAuthContext'
import { projectAuth } from '../firebase/config'

export const useLogin = () => {
    const [isCancelled, setIsCancelled] = useState(false)
    const [ error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()
    
    const login = async (email, password) => {
     setError(null)
     setIsPending(true)
    
  
    // login the user
    try {
        const res = await projectAuth.signInWithEmailAndPassword(email, password)
    dispatch({type: 'LOGIN', payload:res.user})

    // update state
    if (!isCancelled) {
        setIsPending(false)
        setError(null)
    }
    }
    catch(err) {
        if(!isCancelled) {
            console.log(err.message)
            setError(err.message)
            setIsPending(false)
        }
    }
}

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])
    
    return {login, error, isPending}
} 



