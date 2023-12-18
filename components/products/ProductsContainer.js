import React from 'react'
import { Products } from './Products'


export const ProductsContainer = async({categoria}) => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/productos/${categoria}`,
   {//cache: 'force-cache',
    next: {
     revalidate: 60
  }})

 
  const items = await response.json()
  
 
  
 //const items = categoria === 'todos' ? mockData : mockData.filter(item => item.category === categoria)

  
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
