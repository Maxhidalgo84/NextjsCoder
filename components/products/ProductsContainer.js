import React from 'react'
import Products from './Products'


const Getproducts = async (categoria) => {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_VERCEL_URL + `/api/productos/${categoria}`,
      { cache: 'no-store' })
      
    const products = await response.json()
    return products
  } catch (error) {
    console.error(error);
  }

}

const ProductsContainer = async({categoria}) => {

  const items = await Getproducts(categoria)

  
  return (
    <>
        <section className='container text-center mx-auto mt-5'>
          {
           items?.map(item => <Products key={item.slug} item={item} />)
          }   
              
        </section>
   

    </>
  )
}

export default ProductsContainer