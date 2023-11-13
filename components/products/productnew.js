"use client"
import React, { useState } from 'react'
import { mockData } from '@/data/mockData';
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form';





export const ProducNew = () => {


   

    const { register, handleSubmit } = useForm()
    const [show, setShow] = useState(true)
    //const [ isloading , SetIsloading] = useState(false)



    // useEffect(() => {
    //     propsById(params.id)
    // }, [params.id])




    const router = useRouter()




    const onSubmit = handleSubmit(async (data) => {

        await upPropsById(params.id, data, properties.images)

    })



    return (
        <>

            <div>
                <div className="px-4 sm:px-0 flex justify-between">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">Edicion del producto</h3>

                </div>
                <div className="mt-6 border-t border-gray-100">
                    {/* <CloudinaryUploadWidget /> */}

                    {/* <label className="form-label" htmlFor="form4Example2">Fotos a subir</label> */}
                    <form onSubmit={onSubmit} >
                        <dl className="divide-y divide-gray-100">

                            <div className="px-4 py-6  sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Nombre:</dt>

                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    <input
                                        {...register("name")}
                                        id="name"
                                        type='name'
                                

                                    />
                                </dd>
                            </div>
                            <div className="px-4 py-6  sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Slug:</dt>

                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    <input
                                        {...register("slug")}
                                        id="slug"
                                        type='name'
                                  

                                    />
                                </dd>
                            </div>
                            <div className="px-4 py-6  sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Categoria</dt>

                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    <input
                                        {...register("categoria")}
                                        id="categoria"
                                        type='text'
                         

                                    />
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Descripcion</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    <textarea
                                        {...register("descripcion")}
                                        id="ubicacion"
                                        type='string'
                                        rows={3}
                                  
                                        className='w-11/12'

                                    />
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Precio</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    <input
                                        {...register("precio")}
                                        id="precio"
                                        type='number'
                                        

                                    />
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">stock</dt>
                                <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    <input
                                        {...register("stock")}
                                        id="stock"
                                        type='number'
                                    

                                    />
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">imagen</dt>
                                <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    <input
                                        {...register("stock")}
                                        id="stock"
                                        type='file'


                                    />
                                </dd>
                            </div>
                        </dl>
                        <button
                            type="submit"
                            className="flex m-auto bg-green-800 text-white px-2 rounded">Guardar</button>
                    </form>
                    <button
                        onClick={() => router.back()}
                        className="rounded-md flex mx-auto mt-4 bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Volver
                    </button>
                </div>

            </div>


        </>
    )
}
