"use client"

import { useState } from "react"
import { useCartContext } from "../context/CartContext"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QtySelector = ({ initial, item }) => {

    const [quantity, setquantity] = useState(initial)

    const { addToCart } = useCartContext()

    const sumar = () => item.stock > quantity ? setquantity(quantity + 1) : toast("no hay mas stock", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const restar = () => quantity > initial && setquantity(quantity - 1);

    const agregarCarrito = () => {
        toast.success(`Se agrego ${quantity} de ${item.name} al carrito`, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        addToCart(item, quantity);
    }


    return (
        <div className="mt-10">

            <div className='flex flex-row h-8 w-32 rounded-lg relative bg-transparent mt-1"'>
                <button
                    className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-8 rounded-l cursor-pointer outline-none"
                    onClick={restar}> -</button>
                <p className="focus:outline-none text-center px-4 bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700"> {quantity} </p>
                <button
                    className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-8 rounded-l cursor-pointer outline-none"
                    onClick={sumar}> + </button>
            </div>
            <button

                onClick={agregarCarrito}
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"

            >Agregar al carrito</button>
            <ToastContainer />
        </div>
    )
}


export default QtySelector