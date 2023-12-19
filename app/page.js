import Section1 from "@/components/Section1"
import Hero from "@/components/ui/Header/Hero"



export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: "Bodega Maxteina",
  description: "Vinos de Mendoza",
  keywords: ["Vinos", "Bodega", "Visitas", "Malbec", "Cabernet", "Blend"],
 
}





export default function Home() {



  return (
    <>
      {/* <Navbar/> */}
      <Hero greeting={"Bienvenidos a Nuestra Bodega"} />
      <main>
        <Section1 />
      </main>

    </>

  )
}
