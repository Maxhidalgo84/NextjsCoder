"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { doc, updateDoc } from "firebase/firestore";
import { db, storage } from '@/firebase/config'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';




const update = async (slug, image, data, file) => {



    let fileUrl = image


    if (file) {
        const storageRef = ref(storage, slug)
        const fileSnapshot = await uploadBytes(storageRef, file)
        fileUrl = await getDownloadURL(fileSnapshot.ref)
    }

    const productref = doc(db, 'products', slug);

    // Set the "capital" field of the city 'DC'
    return updateDoc(productref, {
        name: data.name,
        description: data.description,
        precio: data.precio,
        stock: data.stock,
        image: fileUrl
    });
}




const ProductEdit = ({ product }) => {


    const { register, handleSubmit } = useForm()
    const { name, description, stock, precio, category, image } = product
    const [file, setFile] = useState(null)



    const onSubmit = handleSubmit(async (data) => {


        await update(product.slug, image, data, file)
        toast.success(`Se edito correctamente`, {
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

    const router = useRouter()


    return (
        <div className="mt-6 border-t border-gray-100">
            <form onSubmit={onSubmit}>
                <dl className="divide-y divide-gray-100">

                    <div className="px-4 py-6  sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Nombre:</dt>

                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            <input
                                {...register("name")}
                                id="name"
                                type='name'
                                defaultValue={name}
                                className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'

                            />
                        </dd>
                    </div>
                    <div className="px-4 py-6  sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Categoria</dt>

                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            <input
                                {...register("category")}
                                id="categoria"
                                type='name'
                                defaultValue={category}

                            />
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Descripcion</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            <textarea
                                {...register("description")}
                                id="description"
                                type='text'
                                rows={3}
                                defaultValue={description}
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
                                type='precio'
                                defaultValue={precio}

                            />
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">stock</dt>
                        <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            <input
                                {...register("stock")}
                                id="stock"
                                type='stock'
                                defaultValue={stock}

                            />
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">imagen</dt>
                        <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            <input
                                onChange={(e) => { setFile(e.target.files[0]) }}
                                id="image"
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
    )
}


export default ProductEdit