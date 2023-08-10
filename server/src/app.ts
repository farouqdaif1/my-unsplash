import 'dotenv/config';
import express, { NextFunction, Request, Response } from "express";
import imageRoutes from './routes/images';
import morgan from 'morgan';
import createHttpError, { isHttpError } from 'http-errors';
import cors from 'cors';

const app = express();
app.use(morgan("dev")); //HELP TO SEE THE ERRORS OF WRONG REQUESTS IN PRODUCTION
app.use(express.json()); //TELL EXPRESS WHAT TYPE OF DATA SHOULD IT ACCEPT
app.use(cors());
app.use('/api/images', imageRoutes)
// HANDLING ERRORS
app.use((req, res, next) => { //when we try to access routes that we did not setup it it will handling th error  
    next(createHttpError(404, "Endpoint not found"))
})
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
    console.error(error);
    let errorMessage = "An unknown error occurred";
    let statusCode = 500;
    if (isHttpError(error)) {
        statusCode = error.status;
        errorMessage = error.message;
    }
    res.status(statusCode).json({
        error: errorMessage
    });
});
export default app;
