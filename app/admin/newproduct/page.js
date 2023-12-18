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




const NewProduct = async() => {

   
    return (
        <>

            <main className="container mx-auto">
                <ProductNew  />
            </main>

        </>

    )
}

export default NewProduct
