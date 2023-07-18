import dotenv from "dotenv";
dotenv.config();
import express from 'express';
const app = express();

import authRoutes from './routes/auth';
import morgan from "morgan";
//settings
app.set('port',4000)
//middleware
app.use(morgan('dev'))
app.use(express.json());
//routes
app.use('/api/auth',authRoutes)

export default app