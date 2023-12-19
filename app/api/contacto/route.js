import { NextResponse } from "next/server";

export const POST  = async (req) => {

    const formData = await req.json();
      
 

    return NextResponse.json(formData)
}