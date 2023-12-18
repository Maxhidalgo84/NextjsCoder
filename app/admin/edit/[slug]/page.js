import { ProductAdm, ProductEdit } from "@/components/admin/productAdm"




const EditPage = async ({ params }) => {

    const { slug } = params


   return (
        <>

            <main className="container mx-auto">
                <ProductAdm slug={slug} />
            </main>

        </>

    )
}

export default EditPage