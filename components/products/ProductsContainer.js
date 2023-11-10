import React from 'react'
import { Products } from './Products'
import {mockData} from "./data"



export const ProductsContainer = ({categoria}) => {

  
  const items = categoria === 'todos' ? mockData : mockData.filter(item => item.category === categoria)

  
  return (
    <>
        <section className='container w-full text-center mx-auto mt-5'>
          {
           items.map(item => <Products key={item.slug} item={item} />)
          }   
              
        </section>
   

    </>
  )
}
