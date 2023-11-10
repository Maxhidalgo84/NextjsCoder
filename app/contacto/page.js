import Contact from '@/components/contact'
import React from 'react'


export const metadata = {
    title: "Bodega Maxteina",
    description: "Vinos de Mendoza",
    keywords: ["Vinos", "Bodega", "Visitas", "Malbec", "Cabernet", "Blend"],
    openGraph: {
        title: "Bodega Maxteina",
        description: "Vinos y visitas",
        type: "article"
    }
}


export default function Home() {



  return (
    <>
     
          <main >
              <Contact />
          </main>
      


    </>
  )
}
