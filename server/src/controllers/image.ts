import { NextFunction, Request, Response } from 'express';
import ImageModel from '../models/image';
export const getImages = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // throw Error("Brazing")
        const images = await ImageModel.find().exec();
        res.status(200).json(images);
    } catch (error) {
        next(error);
    }
}
