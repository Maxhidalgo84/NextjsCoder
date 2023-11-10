import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Products = ({item}) => {


  return (
    <>
        <div>
                   <article className="max-sm:block flex justify-between gap-x-6 py-5">
                      <Link href={`/productos/producto/${item.slug}`}>
                      <div className="flex min-w-0 gap-x-4">
                          {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" /> */}
                          <div className="min-w-0 mx-5 sm:flex  bg-gray-300">
                            <div className='relative w-full md:w-1/2  h-96'>
                              <Image
                              //width={300}
                              //height={300} 
                              fill
                              //sizes='(max-width: 640px) 50vw, 300px'
                              src={item.image}
                              alt={item.name}
                              />
                              </div>
                            
                      <div className='my-auto mx-4 w-fit text-start'>
                                  <p className="sm:text-3xl mb-5 font-semibold leading-6 text-gray-900">{item.name}</p>
                                  <p className='text-xs sm:text-xl ' >{item.description}</p>
                              </div>
                          </div>
                      </div>
                      </Link>
                    </article>
               
          
        </div>
    </>
  )
}
