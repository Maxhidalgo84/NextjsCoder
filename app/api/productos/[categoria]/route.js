import { NextResponse } from "next/server";
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from '@/firebase/config'

export const GET = async (req, { params }) => {

    const { categoria } = params

    const productsCollection = collection(db, "products");

    const q = categoria === 'todos'
        ? productsCollection
        : query(productsCollection, where("category", "==", categoria))

    
    const querySnapshot = await getDocs(q);
  
    const docs = querySnapshot?.docs?.map(doc => doc.data());



    return NextResponse.json(docs)
}