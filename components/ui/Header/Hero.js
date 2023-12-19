"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import vinologo from "/public/images/logovino.png"
import portada2 from "/public/images/portada2.jpg"
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Cart from '@/components/cart/cart'
import { useCartContext } from '@/components/context/CartContext'
import Menu from './Menu'



const Hero = ({ greeting }) => {


  const {totalQty} = useCartContext()


  const [show, setShow] = useState(false)

  return (
    <>
      <header className=' w-full mb-4 bg-black'>

        <div className='relative '>
          <Image
            src={portada2}

            alt="Vino"
            style={{
              minHeight: "220px",
              margin: 'auto',
              opacity: '0.5 '
            }}
            priority={true}
            blurDataURL="data:..."

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
              />
            </Link>
            <Menu />
          </div>
          <button
            className='text-white md:mr-5 my-1' onClick={() => { setShow(true) }}>
            <Cart show={show} setShow={setShow} />
            <FontAwesomeIcon className='w-5 ' icon={faCartShopping} /> 
            <span>{totalQty()}</span>
          </button>
          
        </div>



      </header>


    </>
  )
}

export default Hero