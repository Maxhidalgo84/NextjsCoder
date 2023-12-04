import { ProductAdm, ProductEdit } from "@/components/admin/productAdm"




export default async function Home({ params }) {

    const { slug } = params


   return (
        <>

            <main className="container mx-auto">
                <ProductAdm slug={slug} />
            </main>

        </>

    )
}
