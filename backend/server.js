import path from 'path'
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan'
import colors from 'colors'
import { notFound, errorHandler } from './middleware/errorMiddlware.js'

import postRoutes from './routes/postsRoutes.js'
import connectDB from './config/db.js';

dotenv.config('./../.env');

connectDB();

const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(express.json())

app.use('/api/posts', postRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(`Server running ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold)
);