//import { mockData } from "@/components/products/data";
import { NextResponse } from "next/server";
import {mockData} from "@/data/mockData"

const sleep = (timer) => {
    return new Promise((resolve, reject) => setTimeout(resolve, timer))
}

export async function GET(req, res, next, {params}) {



    const {categoria} = params

    const data = categoria === 'todos' ? mockData : mockData.filter(item => item.category === categoria)
 
   

    await sleep(1000)
    return NextResponse.json(data)
}