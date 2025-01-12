import prisma from "@/prisma";
import { Request, Response, NextFunction } from "express";


type AsyncRequestHandler = (req: Request, res: Response, next: NextFunction) => Promise<void>

const getBooks: AsyncRequestHandler = async (req, res, next) => {
    try {
        const book = await prisma.book.findMany({
            select: {
                id: true,
                title: true,
                author: true,
                description: true,
                coverImage: true,
                price: true,
                strikethroughPrice: true,
                discount: true,
                isNewArrival: true,
                categoryId: true,
            }
        })
        res.status(200).json({ data: book })
    } catch (error) {
        next(error)
    }
}

export default getBooks;