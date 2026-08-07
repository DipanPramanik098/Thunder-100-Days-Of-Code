import express from 'express';
import { signup, login, logout, profile } from '../controllers/userController.js';

const userRouter = express.Router();

// ! login, logout, signup, profile
userRouter.post('/signup', signup);
userRouter.post('/login', login);
userRouter.post('/logout', logout);
userRouter.get('/profile', profile);

export default userRouter;