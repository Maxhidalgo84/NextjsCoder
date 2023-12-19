import OrderDetail from "@/components/admin/OrderDetail"


export default async function Home({ params }) {

    const { id } = params


    return (
        <>

            <main className="container mx-auto">
                <OrderDetail id={id} />
            </main>

        </>

    )
}
