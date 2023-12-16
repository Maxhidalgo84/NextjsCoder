"use client"

import { useAuthContext } from "../context/AuthContext"


const LogoutButton = () => {
    const { logout } = useAuthContext()

    return <button onClick={logout} className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm sm:px-5 px-1 sm:py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Cerrar sesión</button>
}

export default LogoutButton