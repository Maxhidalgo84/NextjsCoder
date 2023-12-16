import { CategoryMenu } from "@/components/products/CategoryMenu"
import { ProductsContainer } from "@/components/products/ProductsContainer"
import Skeleton from "@/components/products/skeleton"
import { Suspense } from "react"



export const generateMetadata = async ({ params }) => {
    return {
        title: 'Bodega Maxteina - ' + params.categoria
    }
}

export function generateStaticParams() {
    return [
        { categoria: 'todos' }, 
        { categoria: 'Malbec' }, 
        { categoria: 'Cabernet' },
        {categoria: 'Blend'}

    ]
}





export default function Home({ params }) {

    const { categoria } = params

    return (
        <>

            <main>
                <div>
                    <CategoryMenu />
                    <Suspense fallback={<div className="flex flex-col gap-6 justify-center w-full items-center"><Skeleton number={3}/></div>}>
                    <ProductsContainer categoria={categoria} />
                    </Suspense>
                </div>
            </main>

        </>

    )
}