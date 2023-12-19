import ProductDetail from "@/components/products/ProductDetail"




export const generateMetadata = async ({ params }) => {
    return {
        title: 'Bodega Maxteina - ' + params.slug
    }
}






export default function Home({params}) {

    const {slug} = params
    return (
        <>
          
            <main className="container-fluid">
                <ProductDetail slug={slug} />   
            </main>

        </>

    )
}
