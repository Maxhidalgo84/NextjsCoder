"use client"
import Image from 'next/image'
import React from 'react'
import { Fragment } from 'react'
import vinologo from "../../public/assets/logovino.png"
import vinologo2 from "../../public/assets/logovino2.png"
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'


const Header2 = () => {

    const navigation = [
        { id: 1, href: "#", name: "Nuestros vinos" },
        { id: 2, href: "#", name: "Visitas" },
        { id: 3, href: "#", name: "Historia" }
    ]

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <Disclosure as="nav" className="bg-gray-300">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-36 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center  sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">

                                    <Image
                                        src={vinologo2}
                                        alt="Vino"
                                        width={200}
                                        blurDataURL="data:..."
                                    //placeholder="blur" // Optional blur-up while loading
                                    />
                                </div>
                                <div className="hidden sm:ml-6 sm:block ">
                                    <div className="flex space-x-4 ">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-brown-300 hover:bg-gray-400 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <button
                                            //onClick={loginout}
                                            className="relative 
                                            flex rounded-full 
                                            px-2 py-1 text-white 
                                            hover:bg-red-800"
                                        >

                                            Logout

                                        </button>
                                    </div>
                                </Menu>
                            </div>
                        </div>
                    </div>
                    {/* <Transition
                        //as={Fragment}
                        enter="transition ease-out duration-1000"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >    */}
                        <Transition            
                        enter="transition-opacity ease-linear duration-700"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2  ">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-brown-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                    </Transition>
                </>
            )}
        </Disclosure>
    

       )
}


export default Header2