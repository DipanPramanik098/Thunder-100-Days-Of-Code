import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import userRouter from './routes/userRouter.js';
import cookieParser from 'cookie-parser';


dotenv.config();

const app = express();
app.use(cookieParser());
app.use(express.json());



// * user related api
app.use('/user', userRouter);
// * chat api

// * message api

// * start
app.use('/', async (req, res) => {
    res.send({
        message: "This Is A Backend For AI Chat Platform"
    })
})

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`🚀 App is listening on http://localhost:${PORT}`);
        });
    }catch(err){
        console.log("❌ DataBase Connection Failed",err.message);
    }
}

startServer();