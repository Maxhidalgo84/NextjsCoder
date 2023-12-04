
import React from 'react'

import { ProductEdit } from './ProductEdit';




export const ProductAdm = async ({ slug }) => {



    const response = await fetch(`http://localhost:3000/api/product/${slug}`,
        { cache: 'no-store' })
    // ).then(r => r.json())


    const product = await response.json()




    return (
        <>

            <div>
                <div className="px-4 sm:px-0 flex justify-between">
                    <h3 className="text-base font-semibold leading-7 mx-auto text-gray-900">Edicion del producto</h3>
                </div>
                <ProductEdit product={product} />


            </div>


        </>
    )
}
