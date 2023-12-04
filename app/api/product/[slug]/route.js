import { NextResponse } from "next/server";
import { doc, getDoc, query, where } from "firebase/firestore"
import { db } from '@/firebase/config'

export const GET = async (req, { params }) => {

    const { slug } = params

    const docRef = doc(db, 'products', slug);

    const docSnapshot = await getDoc(docRef);

    // const data = categoria === 'todos' ? mockData : mockData.filter(item => item.category === categoria)

    // await sleep(1000)

    return NextResponse.json(docSnapshot.data())
}


