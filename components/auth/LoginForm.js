"use client"

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuthContext } from '../context/AuthContext'
import Image from 'next/image'



const LoginPage = () => {

    const { register, handleSubmit, getValues, resetField, reset } = useForm()

    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const { loginUser, onRegister, resetPass } = useAuthContext()



    const regis = () => {
        onRegister()
    }

    const PassReset = async () => {
        resetField("password")
        setError("")
        const resetEmail = getValues("email");
        if (resetEmail) {
            try {
                await resetPass(resetEmail)
                setMessage(`Se envio reset a ${resetEmail} correctamente`)
            } catch (e) {
                //handle error
            }
        }
    }

    const onSubmit = async (data) => {

        try {
            setMessage("")
            await loginUser(data)
        } catch (error) {
            setError("Credenciales invalidas");
            reset()

        }
        //console.log(res)
    };

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
                        Login
                    </h2>
                </div>
                {error && <div className="p-4  mx-auto  text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                    <span className="font-medium">Alerta</span> {error}
                </div>}
                {message && <div className="p-4 mx-auto text-sm text-white rounded-lg bg-green-600 dark:bg-gray-800 dark:text-white" role="alert">
                    <span className="font-medium">Listo </span> {message}
                </div>}
                <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} method="POST">

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
                                    required

                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <button onClick={PassReset} className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </button>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    {...register("password", { require: true })}
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Login
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        no tienes usuario?
                        <button onClick={regis} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Registrarse
                        </button>
                    </p>
                </div>
            </div>
        </>
    )
}


export default LoginPage