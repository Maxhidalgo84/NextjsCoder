import React from 'react'
import { useCartContext } from '../context/CartContext'

const CartItem = ({ product }) => {

    const { removeItem } = useCartContext()

    const remove = () => {
        removeItem(product.slug)
    }

    return (
        <div>
            <li className="flex py-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                        src={product.image}
                        alt={product.image}
                        className="h-full w-full object-cover object-center"
                    />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                    <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                                {product.name}
                            </h3>
                            <p className="ml-4">${product.precio * product.quantity}</p>
                        </div>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500">Cantidad: {product.quantity}</p>

                        <div className="flex">
                            <button
                                type="button"
                                onClick={remove}
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                </div>
            </li>
        </div>
    )
}

export default CartItem