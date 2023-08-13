import { RequestHandler } from 'express';
import ImageModel from '../models/image';
import createHttpError from 'http-errors';
import mongoose from 'mongoose';
export const getImages: RequestHandler = async (req, res, next) => {
    try {
        const images = await ImageModel.find().exec();
        res.status(200).json(images);
    } catch (error) {
        next(error);
    }
}
interface createImageBody {
    label?: string,
    link?: string,
}
export const createImage: RequestHandler<unknown, unknown, createImageBody, unknown> = async (req, res, next) => {
    const { label, link } = req.body
    try {
        if (!label && !link) {
            throw createHttpError(400, "Image must have Label or Link")
        }
        const newImage = await ImageModel.create({
            label: label,
            link: link,
        });
        res.status(201).json(newImage);
    } catch (error) {
        next(error);
    }
}

export const deleteImage: RequestHandler = async (req, res, next) => {
    const imageId = req.params.imageId
    try {
        if (!mongoose.isValidObjectId(imageId)) {
            throw (createHttpError(400, "Invalid image id "))
        }
        const image = await ImageModel.findById(imageId).exec();
        if (!image) {
            throw createHttpError(404, "Image Not found")
        }
        await image.deleteOne();
        res.sendStatus(204);

    } catch (error) {
        next(error);
    }
}
export const searchImage: RequestHandler = async (req, res, next) => {
    try {
        const images = await ImageModel.find({
            $or: [
                { label: { $regex: req.params.searchTerm } },
            ]
        }).exec();
        res.status(200).json(images);
    } catch (error) {
        next(error);
    }
}