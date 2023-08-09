import express from "express";
import { createImage, deleteImage, getImages } from '../controllers/image';
const router = express.Router();
router.get('/', getImages);
router.post('/', createImage);
router.delete('/:imageId', deleteImage)
export default router;
