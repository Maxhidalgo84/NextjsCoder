import { Hero } from '@/components/ui/Header/Hero'
import React from 'react'

const VinosLayout = ({children}) => {
  return (
    <>
    <Hero greeting={"Nuestros Vinos"} />
    {children}

    </>
  )
}

export default VinosLayout
