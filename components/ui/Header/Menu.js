"use client"
import React, { useState } from 'react'
import { MenuList } from './MenuList'
import { XMarkIcon } from '@heroicons/react/24/outline'



const Menu = () => {

   const [open, setOpen]  = useState(false)
   

  

  return(
  
    <>
        <button className='sm:hidden text-white px-4 mt-5 pt-3' onClick={()=>{setOpen(!open)}}>
              {!open ? "Menu" : 
                 
                 <XMarkIcon  className="block h-6 w-6" aria-hidden="true" />   
              }
            
        </button>

        <MenuList open={open} />
       
              
      

    
    </>



  );
}


export default Menu


