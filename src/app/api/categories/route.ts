// import { PrismaClient } from "@prisma/client"
import prisma from "@/utils/connect";
import { NextResponse } from "next/server"


// const prisma = new PrismaClient()
// fetch all categories

export const GET = async () => {
    try {
      const categories = await prisma.category.findMany();
      const categoriesString = JSON.stringify(categories);
  
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
