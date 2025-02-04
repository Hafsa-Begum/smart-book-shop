import prisma from "@/prisma";
import { createBookSchema} from "@/schemas";
import { Request, Response, NextFunction } from "express";

type AsyncRequestHandler = (req: Request, res: Response, next: NextFunction) => Promise<void>;

const createNewBook:AsyncRequestHandler = async(req, res, next)=>{
    try {
        //validate request body
        const parsedBody = createBookSchema.safeParse(req.body);
        if(!parsedBody.success){
            res.status(400).json({
                error: parsedBody.error.errors
            })
            return;
        }
        const book = await prisma.book.create({
            data:{
                ...parsedBody.data
            }
        })
        console.log('User created successfully', book)
        res.status(200).json({
            message: 'New book created successfully.'
        });
        return;
    } catch (error) {
        next(error)
    }
}

export default createNewBook;