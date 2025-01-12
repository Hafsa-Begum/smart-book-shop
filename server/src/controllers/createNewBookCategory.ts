import prisma from "@/prisma";
import { createBookCategorySchema} from "@/schemas";
import { Request, Response, NextFunction } from "express";

type AsyncRequestHandler = (req: Request, res: Response, next: NextFunction) => Promise<void>;

const createNewBookCategory:AsyncRequestHandler = async(req, res, next)=>{
    try {
        //validate request body
        const parsedBody = createBookCategorySchema.safeParse(req.body);
        if(!parsedBody.success){
            res.status(400).json({
                error: parsedBody.error.errors
            })
            return;
        }
        const bookCategory = await prisma.bookCategory.create({
            data:{
                ...parsedBody.data
            }
        })
        console.log('Category created successfully', bookCategory)
        res.status(200).json({
            message: 'New category created successfully.'
        });
        return;
    } catch (error) {
        next(error)
    }
}

export default createNewBookCategory;