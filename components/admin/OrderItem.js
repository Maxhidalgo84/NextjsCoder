import React from 'react'



export const OrderItem = ({product}) => { 

  

        return (
            <div>
                <li className="flex py-6">
                    <div className="ml-4 flex flex-1 flex-col">
                        <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                                <h3>
                                    {product.title}
                                </h3>
                                <p className="ml-4">${product.price * product.quantity}</p>
                            </div>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                            <p className="text-gray-500">Cantidad: {product.quantity}</p>
                        </div>
                    </div>
                </li>
            </div>
        )
    }

    export default OrderItem
