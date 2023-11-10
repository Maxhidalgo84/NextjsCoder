
import {Section1} from "@/components/Section1"
import { Hero } from "@/components/ui/Header/Hero";

export const metadata = { 
  title: "Bodega Maxteina",
  description: "Vinos de Mendoza",
  keywords: ["Vinos", "Bodega","Visitas","Malbec","Cabernet", "Blend"],
  openGraph: {
    title: "Bodega Maxteina",
    description: "Vinos y visitas",
    type: "article"
  }
}





export default function Home() {

 

  return (
    <>
       {/* <Navbar/> */}
       <Hero greeting={"Bienvenidos a Nuestra Bodega"} />
       <main>
        <Section1/>
        </main>
       
    </>
 
  )
}
