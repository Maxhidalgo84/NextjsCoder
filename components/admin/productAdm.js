
import React from 'react'
import ProductEdit from './ProductEdit'


const Getproduct = async (slug) => {
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_VERCEL_URL + `/api/product/${slug}`,
            { cache: 'no-store' })
        const product = await response.json()
        return product
    } catch (error) {
        console.error(error);
    }

}

const ProductAdm = async ({ slug }) => {

    const product = await Getproduct(slug)


    return (
        <>

            <div>
                <div className="px-4 sm:px-0 flex justify-between">
                    <h3 className="text-base font-semibold leading-7 mx-auto text-gray-900">Edicion del producto</h3>
                </div>
                {product && <ProductEdit product={product} />}


            </div>


        </>
    )
}

export default ProductAdm