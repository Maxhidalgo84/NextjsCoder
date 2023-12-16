'use client'

import { auth } from "@/firebase/config"
import { signOut, onAuthStateChanged, sendPasswordResetEmail ,createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { createContext, useContext, useEffect, useState } from "react"


const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)



export const Authprovider = ({children}) =>{

    const [user, setUser] = useState({
        logged: false,
        register: false,
        email: null,
        uid: null,

    })

    const createUser = async (values) => {
        await createUserWithEmailAndPassword(auth, values.email, values.password)
    }

    const loginUser = async (values) => {
        await signInWithEmailAndPassword(auth, values.email, values.password)
    }

    const onRegister = () => {
        setUser({...user, register: !user.register })
    }
     

    const resetPass = async(email) => {
       await sendPasswordResetEmail(auth, email)
    }


    const logout = () => {
        signOut(auth)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
           
           
            if (user) {
                setUser({
                    logged: true,
                    register: false,
                    email: user.email,
                    uid: user.uid
                })
            } else {
                setUser({
                    logged: false,
                    register: false,
                    email: null,
                    uid: null
                })
            }
        })
    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            createUser,
            loginUser,
            onRegister,
            resetPass,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}