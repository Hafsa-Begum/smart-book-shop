import prisma from "@/prisma";
import { Request, Response, NextFunction } from "express";


type AsyncRequestHandler = (req: Request, res: Response, next: NextFunction) => Promise<void>

const getCategory: AsyncRequestHandler = async (req, res, next) => {
    try {
        const category = await prisma.bookCategory.findMany({
            select: {
                id: true,
                name: true,
                description: true,
            }
        })
        res.status(200).json({ data: category })
    } catch (error) {
        next(error)
    }
}

export default getCategory;