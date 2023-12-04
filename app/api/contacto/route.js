import { NextResponse } from "next/server";

export const POST  = async (req) => {

    const formData = await req.json();
      
   console.log(formData);

    return NextResponse.json(formData)
}