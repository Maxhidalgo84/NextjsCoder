import Image from 'next/image'
import React from 'react'
import logoimg from "/public/images/winery-393060_1280.jpg"

export const Section1 = () => {
  return (
    <>
      <div className='flex-wrap flex md:flex-nowrap sm:gap-10 items-center m-auto justify-center '>
        <Image

          src={logoimg}
          alt="Vino"
          width={480}
          blurDataURL="data:..."
        />
        <div className='w-1/8 md:w-64 content-center mx-2'>
          <h2 className='m-2 text-center text-2xl'>Donde todo comenzó</h2>

          <p className='text-base text-center '>Finca y bodega Maxteina bodega de San Rafael, construida en 1984. Elaboramos vinos de gama media y alta.</p>
        </div>
      </div>
    </>
  )
}
