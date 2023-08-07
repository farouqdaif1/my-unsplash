import express from "express";
import { createImage, getImages } from '../controllers/image';
const router = express.Router();
router.get('/', getImages);
router.post('/',createImage)
export default router;
