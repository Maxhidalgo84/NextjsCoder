
import { StarIcon } from '@heroicons/react/20/solid'

import React from 'react'
import Image from 'next/image'
import QtySelector from './QtySelector'

          const reviews = {href: '#', average: 4, totalCount: 117 }

          function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Getproduct = async(slug) => { 
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_VERCEL_URL + `/api/product/${slug}`,
            { cache: 'no-store' })
        const product = await response.json()
        return product
    } catch (error) {
        console.error(error);
    }   
   
}

const ProductDetail = async ({ slug }) => {

    const product = await Getproduct(slug)
   

          return (
              <div className="bg-white m-auto ">
              <div className="pt-6">


                  {/* Image gallery */}
                  <div className="mx-auto mt-6 max-w-lg sm:px-6 lg:gap-x-8 lg:px-8">
                      <div className="aspect-h-6 aspect-w-6  rounded-lg lg:block">
                          <Image
                             fill
                              src={product.image}
                              alt={product.name}
                          />
                      </div>
                  </div>

                  {/* Product info */}
                  <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                      <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
                      </div>

                      {/* Options */}
                      <div className="mt-4 lg:row-span-3 lg:mt-0">
                          <h2 className="sr-only">Product information</h2>
                          <p className="text-3xl tracking-tight text-gray-900">${product.precio}</p>
                       
                          {/* Reviews */}
                          <div className="mt-6">
                              <h3 className="sr-only">Reviews</h3>
                              <div className="flex items-center">
                                  <div className="flex items-center">
                                      {[0, 1, 2, 3, 4].map((rating) => (
                                          <StarIcon
                                              key={rating}
                                              className={classNames(
                                                  reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                                                  'h-5 w-5 flex-shrink-0'
                                              )}
                                              aria-hidden="true"
                                          />
                                      ))}
                                  </div>
                                  <p className="sr-only">{reviews.average} out of 5 stars</p>
                                  <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                      {reviews.totalCount} reviews
                                  </a>
                              </div>
                          </div>

                    
                              <QtySelector initial={1} item={product}  />       
                      </div>

                      <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                          {/* Description and details */}
                          <div>
                              <h3 className="sr-only">Descripcion</h3>

                              <div className="space-y-6">
                                  <p className="text-base text-gray-900">{product.description}</p>
                              </div>
                          </div>

                          <div className="mt-10">
                              <h3 className="text-sm font-medium text-gray-900">Detalles</h3>

                              <div className="mt-4">
                                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                      {product.highlights?.map((highlight) => (
                                          <li key={highlight} className="text-gray-400">
                                              <span className="text-gray-600">{highlight}</span>
                                          </li>
                                      ))}
                                  </ul>
                              </div>
                          </div>

                         
                      </div>
                  </div>
              </div>
          </div>
          )
}

       

export default ProductDetail