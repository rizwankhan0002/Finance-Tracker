import { useState, useEffect } from 'react'
import { projectAuth } from '../firebase/config'
import { useAuthContext } from './UseAuthContext' 


export const useLogout = () => {
    const [isCancelled, setIsCancelled] = useState(false)
     const [error, setError] = useState(null)
    const [ isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const logout = async () => {
        setError(null)
        setIsPending(true)

        // sign the user out
        try {
        await projectAuth.signOut()

        // dispatch logout action
        dispatch({type: 'LOGOUT'})

        // update state
        if (!isCancelled) {
            setIsPending(false)
            setError(null)
        }
      
        }
        catch (err) {
            if (!isCancelled) {
            console.log(err.mesaage)
            setError(err.message)
            setIsPending(false)
        }
    }
    }
    useEffect(() => {
      return () => setIsCancelled(true)
    }, [])

  return { logout, error, isPending}
}