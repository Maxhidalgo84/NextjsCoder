import { NextResponse } from "next/server";
import { doc, getDoc, query, where } from "firebase/firestore"
import { db } from '@/firebase/config'

export const GET = async (req, { params }) => {

    const { id } = params

    const docRef = doc(db, 'orders', id);

    const docSnapshot = await getDoc(docRef);


    return NextResponse.json(docSnapshot.data())
}


