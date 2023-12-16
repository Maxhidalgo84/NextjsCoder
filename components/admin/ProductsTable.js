
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'



const ProductsTable = ({ productos }) => {




    return (

        <>

            <ul role="list" className="divide-y ml-2 divide-gray-100">
                {productos?.map((item) => (
                    <li key={item.slug} className=" flex justify-between gap-x-6 py-5">
                        <div className="flex min-w-0  max-xs:m-auto justify-between items-center gap-x-4">
                            {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" /> */}

                            <p className="text-sm min-[540px]:w-48 w-32 font-semibold leading-6  text-gray-900">{item.name}</p>
                            <Image
                                width={0}
                                height={0}
                                style={{ width: '50px', height: "50px" }}
                                src={item.image}
                                alt={item.name}
                                className="object-cover object-center" />
                            <p className='text-sm font-semibold leading-6 text-gray-900'>stock: {item.stock}</p>

                        </div>
                        <div className="max-sm:text-center  mr-10 ">
                            <button className='max-sm:mt-2 mr-2 max-md:mx-auto  rounded-full px-2 text-white bg-blue-800'>
                                <Link href={`/admin/edit/${item.slug}`}>
                                    Edit
                                </Link>
                            </button>
                            <button className='max-sm:mt-2 max-md:mx-auto  rounded-full px-2 text-white bg-red-600'>
                                Borrar
                            </button>

                        </div>
                    </li>
                ))}
            </ul>
        </>
    )

}


export default ProductsTable