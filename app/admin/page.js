import React from 'react'
import { mockData } from '@/data/mockData'
import Link from 'next/link'
import Image from 'next/image'




const productos = mockData

export default function Home() {


    return (
        <main>
            <h1 className='text-center'>Administrador</h1>
            <h2 className='text-center bold text-lg' >Listado de productos</h2>

            <Link href={`/admin/newproduct`}>
                <button

                    className='bg-black text-white flex m-auto rounded-full p-1' >Agregar producto</button>
            </Link>
            <ul role="list" className="divide-y ml-2 divide-gray-100">
                {productos?.map((item) => (
                    <li key={item.id} className="max-sm:block  flex justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 w-48 max-sm:m-auto justify-between  items-center gap-x-4">
                            {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" /> */}

                            <p className="text-sm font-semibold leading-6 text-gray-900">{item.name}</p>
                            <Image
                                width={50}
                                height={50}
                                src={item.image}
                                alt={item.name}
                                className="bject-cover object-center"
                            />

                        </div>
                        <div className="max-sm:text-center  mr-10 ">
                            <button className='max-sm:mt-2 mr-2 max-md:mx-auto  rounded-full px-2 text-white bg-blue-800'>
                                <Link href={`/admin/edit/${item.slug}`}>
                                    Edit
                                </Link>
                            </button>
                            <button className='max-sm:mt-2 max-md:mx-auto  rounded-full px-2 text-white bg-red-600'>
                                Borrar
                            </button>

                        </div>
                    </li>
                ))}
            </ul>

            <button className='flex m-auto rounded-full px-2 py-1 text-white bg-green-800'>
                <Link href={`/`}>
                    HOME
                </Link>
            </button>

        </main>
    )
}

