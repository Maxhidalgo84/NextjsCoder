"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import vinologo from "/public/images/logovino.png"
import portada2 from "/public/images/portada2.jpg"
import { Menu } from './Menu'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Cart from '@/components/cart/cart'



export const Hero = ({greeting}) => {


  const [show, setShow] = useState(false)

  return (
    <>
      <header className=' w-full mb-4 bg-black'>
        
        <div className='relative '>
               <Image
          src={portada2}
          
          alt="Vino"
            style={{
              minHeight:"220px",
              margin: 'auto',
              opacity: '0.5 '
            }}
          priority={true}
          objectFit='cover'
          layout='responsive'
                    
            
         
          blurDataURL="data:..."
        //placeholder="blur" // Optional blur-up while loading
        /> 
          <p className='text-white absolute w-full text-center sm:text-3xl top-1/2'>{greeting}</p>
        </div>
        
   
             
                    
              <div className='w-full absolute top-0 auto flex flex-col sm:justify-between sm:flex-row  sm:flex-wrap py-2  
                    items-center'>   
                  <div className='flex flex-col sm:flex-row items-center'>
                    <Link 
                    href={"/"}
                    >      
                  <Image
                        src={vinologo}
                        alt="Vino"
                        width={200}
                        blurDataURL="data:..."
                      //placeholder="blur" // Optional blur-up while loading
                      />
                  </Link>
                  <Menu />        
                  </div>
                  <button
                    className='text-white md:mr-5 my-1' onClick={() => { setShow(true) }}>
                    <Cart show={show} setShow={setShow} />
                    <FontAwesomeIcon className='w-5 ' icon={faCartShopping} />
                  </button>       
            </div>
     


        </header>
     
    
    </>
  )
}
