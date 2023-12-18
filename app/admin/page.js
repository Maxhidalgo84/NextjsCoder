import React from 'react'
import Link from 'next/link'
import ProductsTable from '@/components/admin/ProductsTable'
import LogoutButton from '@/components/admin/LogOutButton'




const AdminPage = async () => {

    return (
        <main>
            <h1 className='text-center'>Administrador</h1>
            <div className='flex flex-row justify-between'>
                <button className='rounded-full  px-1 py-1 text-white  hover:bg-blue-600 bg-blue-800'>
                    <Link href={`/admin/orders`}>
                        Ordenes
                    </Link>
                </button>
                <LogoutButton />

            </div>

            <h2 className='text-center bold text-lg' >Listado de productos</h2>
            <Link href={`/admin/newproduct`}>
                <button

                    className='bg-black hover:bg-gray-600 text-white focus:outline-none focus:ring-4 focus:ring-gray-300  flex m-auto rounded-full p-1' >Agregar producto</button>
            </Link>
            <ProductsTable />

            <button className='flex m-auto rounded-full  px-2 py-1 text-white  hover:bg-green-600 bg-green-800'>
                <Link href={`/`}>
                    HOME
                </Link>
            </button>

        </main>
    )
}

export default AdminPage