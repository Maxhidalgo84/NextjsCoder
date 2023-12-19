
import React from 'react'
import ProductEdit from './ProductEdit'



const ProductAdm = async ({ slug }) => {



    const response = await fetch(process.env.NEXT_PUBLIC_VERCEL_URL+ `/api/product/${slug}`,
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

export default ProductAdm