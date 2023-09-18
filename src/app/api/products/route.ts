// import { PrismaClient } from "@prisma/client"
import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server"


// const prisma = new PrismaClient()
// fetch all products

export const GET = async (req:NextRequest) => {
  const {searchParams} = new URL(req.url)
  const cat = searchParams.get('cat')
    try {
      const products = await prisma.product.findMany({
        where:{
          ...(cat ? {catSlug:cat}: {isFeatured:true}),
        }
      });
      const categoriesString = JSON.stringify(products);
  
      return new NextResponse(categoriesString, {
        status: 200,
      });
    } catch (error) {
      console.log(error);
  
      return new NextResponse(JSON.stringify({ message: 'Something Went Wrong!' }), {
        status: 500,
      });
    }
  };
export const POST = () =>{
    return new NextResponse("hello", {
        status: 200
    })
}
