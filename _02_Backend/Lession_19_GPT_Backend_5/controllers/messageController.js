import Chat from "../model/chatSchema";
import Message from "../model/messageSchema";

export const getMessage = async (req, res) => {
    try {
        const { chatId } = req.params;

        // * verify that this chat id belongs to same user or not?
        const chat = Chat.findOne({
            _id: chatId,
            userId: req.user._id // ? updated in req via middleware
        });
        if (!chat) {
            return res.status(404).json({
                message: "Chat Not Found"
            })
        }

        // ! get all msg and sort basis of created at
        const messages = Message.find({
            chatId: chatId
        }).sort({ createdAt: 1 });

        return res.status(200).json({
            message: "Your All Messages Are Here",
            msg: messages
        })
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

export const sendMessage = async (req, res) => {
    try {
        const { chatId } = req.params;

        const { content } = req.body;

        if (!content || content.trim() === "") {
            return res.status(500).json({
                message: "Don't Send Empty Message"
            });
        }

        // * verify that this chat id belongs to same user or not?
        const chat = Chat.findOne({
            _id: chatId,
            userId: req.user._id // ? updated in req via middleware
        });

        const userMessage = Message.create({
            userId: req.user._id,
            chatId: chatId,
            role: "user",
            content: content
        })

        // * dummy Reply/
        const dummyReply1 = "Ekbar Koshis Karle Laadle";
        const dummyReply = await Message.create({
            userId: req.user._id,
            chatId: chatId,
            role: "user",
            content: dummyReply
        })

        return res.status(201).json({
            message: dummyReply
        });
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
} 