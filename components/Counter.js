"use client"

import React, { useState } from 'react'

export const Counter = () => {
  
    const [counter, SetCounter] = useState(0)
    

    return (

      <div className='flex flex-row h-8 w-32 rounded-lg relative bg-transparent mt-1"'>
        <button 
          className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-8 rounded-l cursor-pointer outline-none"
                onClick={() => { SetCounter(counter - 1) }}> -</button>
        <p className="focus:outline-none text-center px-4 bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700"> {counter} </p>
        <button 
         className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-8 rounded-l cursor-pointer outline-none"
         onClick={()=>{SetCounter(counter+1)}}> +</button>
    </div>

  )
}
