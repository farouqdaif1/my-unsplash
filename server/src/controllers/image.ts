import { RequestHandler } from 'express';
import ImageModel from '../models/image';
export const getImages: RequestHandler = async (req, res, next) => {
    try {
        // throw Error("Brazing")
        const images = await ImageModel.find().exec();
        res.status(200).json(images);
    } catch (error) {
        next(error);
    }
}
export const createImage: RequestHandler = async (req, res, next) => {
    // const label = req.body.label
    const { label,link} = req.body
    try {
        const newImage = await ImageModel.create({
            label: label,
            link: link,
        });
        res.status(201).json(newImage);
    } catch (error) {
        next(error);
    }
}
 
// export const deleteImage: RequestHandler = async (req, res, next) => {
//     const id =
//     try {
        
//         const removeImage
//     } catch (error) {
//         next(error); 
//     }
// }
