
import Hero from '@/components/ui/Header/Hero'
import React, { Suspense } from 'react'


const cartLayout = ({ children }) => {
    return (
        <>
            <Hero greeting={"Resumen de compra"} />
            {children}
        </>
    )
}

export default cartLayout
