import { ProductDetail } from "@/components/products/ProductDetail";



export async function generateMetada({ params }) {
    return {
        title: `vino - ${params.slug}`
    }
}






export default function Home({params}) {

    const {slug} = params
    return (
        <>
          
            <main className="container">
              <ProductDetail slug={slug} />
            </main>

        </>

    )
}
