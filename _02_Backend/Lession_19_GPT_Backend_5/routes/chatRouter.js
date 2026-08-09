import express from "express";
import { getRecentChat, getSingleChat, newChat, deleteChat } from "../controllers/chatController";

const chatRouter = express.Router();

// * use middleware for {all}
chatRouter.use(authUserMiddleware);

// * getRecent Chat -> top 20, getSingleChat, NewChat, Delete Chat
chatRouter.post('/newChat', newChat);
chatRouter.get('/getRecentChat', getRecentChat);
chatRouter.get('/:chatId', getSingleChat);
chatRouter.delete('/:chatId', deleteChat);

export default chatRouter;