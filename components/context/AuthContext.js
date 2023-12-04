'use client'

const { createContext, useContext, useState } = require("react")



const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)



export const Authprovider = ({children}) =>{

    const [user, setUser] = useState({
        loggedIn: false,
        email: null,
        uid: null,

    })


    return (
        <AuthContext.Provider 
        value={{user}}
        >
            {children}
        </AuthContext.Provider>
    )

}