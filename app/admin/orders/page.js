import ListOrders from "@/components/admin/ListOrders"
import LogoutButton from "@/components/admin/LogOutButton"
import { db } from "@/firebase/config"

import { collection, getDocs } from "firebase/firestore"
import Link from "next/link"

const getOrders = async () => {
    const ordersRef = collection(db, "orders")
    const querySnapshot = await getDocs(ordersRef)
    const docs = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
    return docs
}


const Orders = async () => {
    const orders = await getOrders()

    return (
        <main className="container mx-auto">
            <button className='rounded-full flex mx-auto px-1 py-1 text-white  hover:bg-blue-600 bg-blue-800'>
                <Link href={`/admin`}>
                    Admin Page
                </Link>
            </button>
            <h2 className="text-center font-medium">Ordenes</h2>
            <div className="text-end">
                <LogoutButton />
            </div>
            <ListOrders orders={orders} />
            
        </main>
    )
}

export default Orders