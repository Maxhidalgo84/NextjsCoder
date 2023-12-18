"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import Image from 'next/image'
import { useAuthContext } from '../context/AuthContext'


const RegisterPage = () => {


    const { register, handleSubmit } = useForm()

    const { createUser, onRegister } = useAuthContext()

    const regis = () => {
        onRegister()
    }

    const onSubmit = handleSubmit(async (data) => {

        await createUser(data)
        
    });

    return (

        <>

            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Image

                        width={0}
                        height={0}
                        priority
                        src="/images/logovino.png"
                        sizes="100vw"
                        style={{ width: '50%', height: 'auto', margin: "auto" }} // optional
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Registrarse
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={onSubmit} method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Username:
                            </label>
                            <div className="mt-2">
                                <input
                                    {...register("username", { require: true })}
                                    id="username"
                                    name="username"
                                    type="text"
                                    autoComplete="username"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    {...register("email", { require: true })}
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                             
                            </div>
                            <div className="mt-2">
                                <input

                                    id="password"
                                    name="password"
                                    type="password"
                                    {...register("password", { require: true })}
                                    autoComplete="current-password"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Registrarse
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        ya tienes usuario?
                        <button onClick={regis} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Login
                        </button>
                    </p>
                </div>
            </div>
        </>
    )
}


export default RegisterPage