import { NextResponse } from "next/server";
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from '@/firebase/config'

export const GET = async (req, { params }) => {

    const { categoria } = params

    const productsCollection = collection(db, "products");

    // const q = categoria === 'todos'
    // ? productsRef
    //     : query(productsRef, where("category", "==", `${categoria}` ));

    const q = categoria === 'todos'
        ? productsCollection
        : query(productsCollection, where("category", "==", categoria))


    const querySnapshot = await getDocs(q);

    const docs = querySnapshot.docs.map(doc => doc.data());

    // const data = categoria === 'todos' ? mockData : mockData.filter(item => item.category === categoria)

    // await sleep(1000)

    return NextResponse.json(docs)
}