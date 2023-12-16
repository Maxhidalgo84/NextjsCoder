
import Link from "next/link"



const ListOrders = ({ orders }) => {



    return (
        <div>
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" >Comprador</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" >Id compra</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" >Email</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" >Fecha</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {orders.map(order => (
                                        <tr key={order.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">{order.client.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{order.id}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{order.client.email}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{order.date.toDate().toLocaleString('en-GB')}</td>
                                            <Link href={`/admin/orders/${order.id}`} className="text-indigo-600 hover:text-indigo-900">
                                                Ver Detalle
                                            </Link>
                                        </tr>
                                    ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ListOrders