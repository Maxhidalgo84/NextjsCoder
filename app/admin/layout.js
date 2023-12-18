"use client"

import { useAuthContext } from "@/components/context/AuthContext"


const AdminLayout = ({ children, login, signup }) => {
    const { user } = useAuthContext()

    return (
        <div>
            {user?.logged ? children : 
          user?.register ? signup : login }
     
        </div>
    )
}

export default AdminLayout