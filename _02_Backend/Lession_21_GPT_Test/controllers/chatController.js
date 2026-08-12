import Chat from "../model/chatSchema.js";
import Message from "../model/messageSchema.js";

// ! req.user k andar user k sare info present hai -- through middleware
export const getRecentChat = async (req, res) => {
    try {
        const twentychats = await Chat.find({ userId: req.user._id })
            .sort({ updatedAt: -1 })
            .limit(20)
            .select("topic updatedAt");

        return res.status(200).json({
            message: "Your Recent Chats",
            twentychats
        })
    } catch (err) {
        console.log(err.message);
        return res.status(500).json(
            {
                message: "Internal server Error"
            }
        )
    }
}

export const getSingleChat = async (req, res) => {
    try {
        const { chatId } = req.params;
        // Single Chat--
        const chat = await Chat.findOne({ _id: chatId, userId: req.user._id });

        if (!chat) {
            return res.status(404).json({
                message: "Sorry Chat Not Found"
            })
        }

        return res.status(200).json({
            message: "Your Previous Chat",
            chat
        })
    } catch (err) {
        console.log(err.message);
        return res.status(500).json(
            {
                message: "Internal server Error"
            }
        )
    }
}

export const newChat = async (req, res) => {
    try {
        const { model } = req.body;
        if (!model) {
            return res.status(400).send({
                message: "Select A Model"
            })
        }
        // * check model --- right or not?

        // * create chat--
        const newChat = await Chat.create({
            userId: req.user._id,
            model,
        })
        res.status(201).json({
            chatId: newChat._id,
            userId: req.user._id,
            model,
            topic: newChat.topic,
            createdAt: newChat.createdAt
        })
    } catch (err) {
        console.log(err.message);
        return res.status(500).json(
            {
                message: "Internal server Error"
            }
        )
    }
}

import mongoose from "mongoose";

export const deleteChat = async (req, res) => {
    try {
        const { chatId } = req.params;

        // Check whether chatId is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(chatId)) {
            return res.status(400).json({
                message: "Invalid chat id"
            });
        }

        // Check whether chat belongs to logged-in user
        const chatFound = await Chat.findOne({
            _id: chatId,
            userId: req.user._id
        });

        if (!chatFound) {
            return res.status(404).json({
                message: "Chat Not Found"
            });
        }

        // Delete chat
        await Chat.deleteOne({
            _id: chatId
        });

        // Delete all messages belonging to this chat
        await Message.deleteMany({
            chatId: chatFound._id
        });

        return res.status(200).json({
            message: "Your Chat Is Deleted Successfully",
            updatedAt: chatFound.updatedAt
        });

    } catch (err) {
        console.log(err.message);

        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};
