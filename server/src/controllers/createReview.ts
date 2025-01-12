import prisma from "@/prisma";
import { createReviewSchema} from "@/schemas";
import { Request, Response, NextFunction } from "express";

type AsyncRequestHandler = (req: Request, res: Response, next: NextFunction) => Promise<void>;

const createReview:AsyncRequestHandler = async(req, res, next)=>{
    try {
        //validate request body
        const parsedBody = createReviewSchema.safeParse(req.body);
        if(!parsedBody.success){
            res.status(400).json({
                error: parsedBody.error.errors
            })
            return;
        }
        const {bookId, score, content, userId} = parsedBody.data;
        const review = await prisma.review.create({
            data:{
                book: { connect: { id: bookId } }, // Connects to the related Book
                score: score,
                content: content || "",
                userId: userId || "",
            }
        })
        console.log('Review created successfully', review)
        res.status(200).json({
            message: 'New Review created successfully.'
        });
        return;
    } catch (error) {
        next(error)
    }
}

export default createReview;