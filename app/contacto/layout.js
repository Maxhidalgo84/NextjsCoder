import { Hero } from '@/components/ui/Header/Hero'
import React from 'react'

const layoutContacto = ({children}) => {
  return (
    <>
    <Hero greeting={"Contacto"} />
    {children}
    </>
  )
}

export default layoutContacto
