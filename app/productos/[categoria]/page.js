import { CategoryMenu } from "@/components/products/CategoryMenu"
import { ProductsContainer } from "@/components/products/ProductsContainer"


export const generateMetada = async({ params }) => {
    return {
        title: `Bodega Maxteina - ${params.categoria}`
    }
}




export default function Home({ params }) {

    const { categoria } = params

    return (
        <>
            {/* <Navbar/> */}
            <main>  
              <div>
             <CategoryMenu />
             <ProductsContainer categoria={categoria} />
             </div>
            </main>

        </>

    )
}