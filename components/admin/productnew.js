"use client"
import React, { useState } from 'react'
import { mockData } from '@/data/mockData';
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form';
import { doc, setDoc } from "firebase/firestore";
import { db, storage } from '@/firebase/config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';


const createproduct = async (values, file) => {


    const storageRef = ref(storage, values.slug)
    const fileSnapshot = await uploadBytes(storageRef, file)
    const fileUrl = await getDownloadURL(fileSnapshot.ref)
    const docRef = doc(db, 'products', values.slug)


    return setDoc(docRef, { ...values, image: fileUrl });

}


const ProductNew = () => {


    const { register, handleSubmit } = useForm()

    const [file, setFile] = useState(null)
    //const [ isloading , SetIsloading] = useState(false)



    const router = useRouter()


    const onSubmit = handleSubmit(async (data) => {


        createproduct(data, file)
        toast.success(`Se agrego correctamente`, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });


    })



    return (
        <>

            <div>
                <div className="px-4 sm:px-0 text-center">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">Agregar producto</h3>

                </div>
                <div className="mt-6 border-t border-gray-100 ">
                    {/* <CloudinaryUploadWidget /> */}

                    {/* <label className="form-label" htmlFor="form4Example2">Fotos a subir</label> */}
                    <form onSubmit={onSubmit} className='max-w-xl mx-auto'>
                        <dl className="divide-y divide-gray-100">

                            <div className="px-4 py-6  sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Nombre:</dt>

                                <dd className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md ">
                                    <input
                                        {...register("name")}
                                        id="name"
                                        type='name'
                                        className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'


                                    />
                                </dd>
                            </div>
                            <div className="px-4 py-6  sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Slug:</dt>

                                <dd className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md ">
                                    <input
                                        {...register("slug")}
                                        id="slug"
                                        type='name'
                                        className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'


                                    />
                                </dd>
                            </div>
                            <div className="px-4 py-6  sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Categoria</dt>

                                <dd className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md ">
                                    <input
                                        {...register("category")}
                                        id="category"
                                        type='text'
                                        className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'

                                    />
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Descripcion</dt>
                                <dd className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                                    <textarea
                                        {...register("description")}
                                        id="description"
                                        type='string'
                                        rows={3}
                                        className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                                    //className='w-11/12'

                                    />
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Precio</dt>
                                <dd className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md ">
                                    <input
                                        {...register("precio")}
                                        id="precio"
                                        type='number'
                                        className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'

                                    />
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">stock</dt>
                                <dd className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md ">
                                    <input
                                        {...register("stock")}
                                        id="stock"
                                        type='number'
                                        className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'

                                    />
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">imagen</dt>
                                <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                    <input
                                        onChange={(e) => { setFile(e.target.files[0]) }}
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
                    <ToastContainer />
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


export default ProductNew