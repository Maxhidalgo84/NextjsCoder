"use client"

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useCartContext } from '../context/CartContext'
import CartItem from './CartItem'
import { db } from '@/firebase/config'
import { addDoc, collection, doc, getDoc, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore'
import Link from 'next/link'


const createOrder = async (values, items, totalPrice, setIdVenta) => {




    const ventasCollection = collection(db, "orders");
    addDoc(ventasCollection, {
        client: values,
        items: items.map(item => ({
            title: item.name,
            price: item.precio,
            slug: item.slug,
            quantity: item.quantity
        })),
        date: serverTimestamp(),
        total: totalPrice()
    })
        .then(res => {
            setIdVenta(res.id);
            items.forEach(producto => {
                actStock(producto)
            });
        })



    //actualizo stock en firestore
    const actStock = (producto) => {
        const refDoc = doc(db, "products", producto.slug);
        getDoc(refDoc)
            .then((data) => {
                let updateStock = data;
                let stockup = updateStock.get("stock");
                updateDoc(refDoc, { stock: (stockup - producto.quantity) });
            })
            .catch(() => {
                console.log("error leer articulo");
            })
    }

}

const CartForm = () => {

    const { register, handleSubmit, reset } = useForm()
    const [idVenta, setIdVenta] = useState("");
    const [finish, setFinish] = useState(false);
    const [complete, setComplete] = useState(false)
    const { cart, totalQty, totalPrice, emptycart } = useCartContext()


    const onSubmit = async (data) => {
        await createOrder(data, cart, totalPrice, setIdVenta)
        setComplete(true)
        setFinish(true)
        reset()
        emptycart()
    };
    //console.log(res)




    return (
        <>

            <div className="flex min-h-full flex-col sm:flex-row  justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto  ">
                    <div className="mt-8">
                        <div className="flow-root mx-auto w-max">

                            <ul className=" gap-4 p-2 divide-gray-200">
                                {cart.map(product => (
                                    <CartItem product={product} key={product.slug} />
                                ))}
                            </ul>
                        </div>
                    </div>
                    {complete ?
                        <div>
                            <div class="flex items-center text-center bg-blue-500 text-white text-sm font-bold px-4 py-3" role="alert">
                                <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" /></svg>
                                <p>Compra realizada con exito su id es: {idVenta} </p>
                            </div>
                            <button className='flex m-auto rounded-full  px-2 py-1 mt-3 text-white  hover:bg-green-600 bg-green-800'>
                                <Link href={`/`}>
                                    HOME
                                </Link>
                            </button>
                        </div> :
                        <div className="flex text-base max-[400px]:flex-col max-[400px]:text-center mx-auto mt-4 gap-3 font-sm font-medium w-max text-gray-900">
                            <p>Cantidad de productos: {totalQty()} </p>
                            <p>Total: $ {totalPrice()}</p>

                        </div>}


                </div>

                {totalQty() !== 0 ?
                    <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Ingrese sus datos
                        </h2>

                        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} method="POST">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Nombre
                                </label>
                                <div className="mt-2">
                                    <input
                                        {...register("name", { require: true })}
                                        id="name"
                                        name="name"
                                        type="name"
                                        autoComplete="nombre"
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
                                        required

                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Direccion
                                </label>
                                <div className="mt-2">
                                    <input
                                        {...register("address", { require: true })}
                                        id="address"
                                        name="address"
                                        type="address"
                                        autoComplete="address"
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
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div> : null}
            </div>
        </>
    )
}


export default CartForm