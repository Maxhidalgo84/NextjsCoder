import { ProductNew } from "@/components/admin/productnew"

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

            <main className="container mx-auto">
                <ProductNew  />
            </main>

        </>

    )
}
