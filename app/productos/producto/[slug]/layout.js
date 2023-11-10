import { Hero } from '@/components/ui/Header/Hero'
import React from 'react'

export async function generateMetada({ params }) {
    return {
        title: `vino - ${params.slug}`
    }
}


const DetailLayout = ({children}) => {
  return (
    <>
    <Hero greeting={`Detalle de producto`} />
    {children}

    </>
  )
}


export default DetailLayout