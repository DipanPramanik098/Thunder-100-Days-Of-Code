import express from 'express';
import { getMessage, sendMessage } from '../controllers/messageController';
import authUserMiddleware from '../middlewares/authUserMiddleware.js';

const messageRouter = express.Router();

// AUTHENTICATE--
messageRouter.use('/', authUserMiddleware);
messageRouter.get('/:chatId', getMessageMessage);
messageRouter.post('/:chatId', sendMessagessage);

export default messageRouter;
