import React from 'react'
import { Products } from './Products'
import {mockData} from "@/data/mockData"



export const ProductsContainer = async({categoria}) => {

  // const items = await fetch(`http://localhost:3000/api/productos/${categoria}`,
  // {cache: 'no-store'}
  // ).then(r => r.json())
  
 
  
 const items = categoria === 'todos' ? mockData : mockData.filter(item => item.category === categoria)

  
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
