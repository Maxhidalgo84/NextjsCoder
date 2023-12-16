import React from 'react'
import { Products } from './Products'








export const ProductsContainer = async({categoria}) => {

  const response = await fetch(`http://localhost:3000/api/productos/${categoria}`,
   {//cache: 'force-cache',
    next: {
     revalidate: 60
  }})

  // if (!response) {
  //   throw new Error("fallo")
    
  // }

 
 
  const items = await response.json()
  
 
  
 //const items = categoria === 'todos' ? mockData : mockData.filter(item => item.category === categoria)

  
  return (
    <>
        <section className='container text-center mx-auto mt-5'>
          {
           items.map(item => <Products key={item.slug} item={item} />)
          }   
              
        </section>
   

    </>
  )
}
