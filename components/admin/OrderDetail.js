import Link from 'next/link'
import OrderItem from './OrderItem'



const Getorder = async (id) => {
    try {

        const response = await fetch(process.env.NEXT_PUBLIC_VERCEL_URL+`/api/order/${id}`,
            { cache: 'no-store' })
        const order = await response.json()
        return order
    } catch (error) {
        console.error(error);
    }

}

const OrderDetail = async ({ id }) => {


    // const response = await fetch(process.env.NEXT_PUBLIC_VERCEL_URL`/api/order/${id}`,
    //     { cache: 'no-store' })
    // // ).then(r => r.json())
   


    // const order = await response.json()

    const order = await Getorder(id)



    return (
        <div>
            <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Informacion de orden</h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">id: {id}</p>
            </div>
            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Nombre</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{order.client.name}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Direccion</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{order.client.address}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Email</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{order.client.email}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Total</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">$ {order.total}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Productos</dt>
                        <div className="mt-8">
                            <div className="flow-root">
                                <ul role="list" className="-my-6 divide-y divide-gray-200">
                                    {order?.items.map(product => (
                                        <OrderItem product={product} key={product.slug} />
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </dl>
            </div>
            <button className='rounded-full flex mx-auto px-1 py-1 text-white  hover:bg-blue-600 bg-blue-800'>
                <Link href={`/admin/orders`}>
                    Ordenes
                </Link>
            </button>
        </div>
    )
}


export default OrderDetail