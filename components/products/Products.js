import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Products = ({ item }) => {


  return (
    <>
      <div>
        <article className="max-sm:block  flex justify-between  gap-x-6 py-3">
          <Link href={`/productos/producto/${item.slug}`} className='xl:w-10/12 m-auto' >
            <div className="flex min-w-0 bg-black gap-x-4">
              {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" /> */}
              <div className="min-w-0 mx-75 shadow hover:opacity-90 sm:flex  bg-gray-300 border-black border-2">
                <div className='relative '>
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto', margin: "auto" }} // optional
                    src={item.image}
                    alt={item.name}

                  />
                </div>

                <div className='md:my-auto my-2 mx-2 w-fit  sm:text-start'>
                  <p className="lg:text-3xl text-xl mb-5  font-semibold leading-4 text-gray-900">{item.name}</p>
                  <p className='text-base lg:text-xl text-justify' >{item.description}</p>
                  <p className='mt-6 text-green-600 font-semibold'><span className='text-black'>Precio:</span>${item.precio}</p>
                </div>
              </div>
            </div>
          </Link>
        </article>


      </div>
    </>
  )
}

export default Products