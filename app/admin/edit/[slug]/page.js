import { ProductEdit } from "@/components/products/productedit"




export default function Home({ params }) {

    const { slug } = params
    return (
        <>

            <main className="container mx-auto">
                <ProductEdit slug={slug} />
            </main>

        </>

    )
}
