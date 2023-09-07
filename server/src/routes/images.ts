import express from "express";
import { createImage, deleteImage, getImages, searchImage } from '../controllers/image';
const router = express.Router();
router.get('/', getImages);
router.post('/', createImage);
router.delete('/:imageId', deleteImage)
router.get('/search/:searchTerm', searchImage)
export default router;
