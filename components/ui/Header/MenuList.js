
import Link from 'next/link'
import React from 'react'

export const MenuList = ({ open }) => {

    const navigation = [
        { id: 1, href: "/productos/todos", name: "Nuestros vinos" },
        { id: 2, href: "/labodega", name: "La Bodega" },
        { id: 3, href: "/contacto", name: "Contacto" }
    ]

    const classNames = (...classes) => {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <>
            <div className={`${open ? "h-28" : "h-0"} 
        w-full flex justify-center transition-all ease-out duration-700 bg-white
        overflow-hidden sm:overflow-visible md:transition-none sm:w-auto sm:flex sm:items-center
        z-50
      ` }>



                <nav className="flex flex-col  duration-100 ease-out sm:transition-none 
                   t-5 mx-4 sm:flex-row sm:items-center sm:mx-0 sm:ml-auto text-center
                   sm:mt-0 sm:pt-0 sm:border-0">
                    {navigation.map((item) => (
                        <Link
                            key={item.id}
                            href={item.href}
                            className={classNames(
                                item.current ? 'bg-gray-900  text-white' : 'sm:text-white hover:opacity-70 hover:text-white',
                                'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>


            </div>
        </>
    )
}
