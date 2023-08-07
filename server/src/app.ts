import 'dotenv/config';
import express, { NextFunction, Request, Response } from "express";
import { getImages } from './controllers/image';
const app = express();
app.get('/', getImages);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => { 
    console.error(error);
    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) errorMessage = error.message;
    res.status(500).json({
        error : errorMessage
    });
});
export default app;
