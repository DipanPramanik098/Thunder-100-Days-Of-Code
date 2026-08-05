import express from "express";
import mongoose from "mongoose";
import User from "./userSchema.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config(); // * yeh middleware h jo .env file ko read krta h
import cookieParser from "cookie-parser" // * yeh middleware h jo cookie ko read krta h

const app = express();
app.use(cookieParser()); // yeh middleware h jo cookie ko read krta h

app.use(express.json()); // yeh middleware h jo json data ko parse krta h


await mongoose.connect(process.env.URI); // * yeh middleware h jo mongodb se connect krta h

app.post("/create-user", async (req, res) => {
    const { name, age, email, password } = req.body;

    const user = await User.create(req.body);


    // * token create
    const token = jwt.sign(
        {
            // * payload - ye user ka data hoga, jo humko token me chahiye hoga
            email: user.email,
            name: user.name,
        },
        "your-secret-key", // * secret key - jo token create karte time use kiya gaya tha
        {
            expiresIn: "2h", // * token expire hone ka time -- automatically create 2 entry - creation time and expire time
        }
    );
    // ? Browser Se Baat Kar Raha Hun
    res.cookie("token", token, {
        httpOnly: true, // * yeh cookie ko client side se access nahi krne dega
        secure: false, // * yeh cookie ko https me hi send  krne dega, agar false h toh http me bhi send hoga
        maxAge: 2 * 60 * 60 * 1000, // * yeh cookie ko 2 hour ke liye valid rakhega
    })

    res.json({
        message: "User Created Successfully",
        user,
        token
    })

})

app.get("/user", async (req, res) => {
    // Verify user's token
    const token = req.cookies.token; // * yeh cookie ko read krne ke liye use kiya gaya h

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized",
        });
    }

    let payload;

    // * token verify krne ke liye, humko secret key chahiye hoga, jo token create karte time use kiya gaya tha
    try {
        payload = jwt.verify(token, "your-secret-key");
    } catch (error) {
        return res.status(401).json({
            message: "Invalid Token",
        });
    }

    // * token verify hone ke baad database se user find karo
    const user = await User.findOne({
        email: payload.email,
    });

    // * agar user database me nahi mila
    if (!user) {
        return res.status(404).json({
            message: "User Not Found",
        });
    }

    // * user mil gaya toh response bhej do
    res.status(200).json({
        message: "User Found",
        payload,
        user,
    });
});

app.post("/login", async (req, res) => {
    // * Client se email aur password le rahe hain
    const { email, password } = req.body;

    // * Sabse pehle email ke basis par user ko find karo
    const user = await User.findOne({ email });

    // * Agar user nahi mila toh error return karo
    if (!user) {
        return res.status(404).json({
            message: "User Not Found",
        });
    }

    // * verify password, agar password match nahi karta h toh error throw krdo
    if (user.password !== password) {
        return res.status(401).json({
            message: "Invalid Password",
        });
    }

    // * token create
    const token = jwt.sign(
        {
            // * payload - ye user ka data hoga, jo humko token me chahiye hoga
            email: user.email,
            name: user.name,
        },
        "your-secret-key", // * secret key - jo token create karte time use kiya gaya tha
        {
            expiresIn: "2h", // * token expire hone ka time
        }
    );

    // ? Browser Se Baat Kar Raha Hun
    res.cookie("token", token, {
        httpOnly: true, // * yeh cookie ko client side se access nahi krne dega
        secure: false, // * https me true rakhte hain, abhi learning ke liye false
        maxAge: 2 * 60 * 60 * 1000, // * cookie 2 hours tak valid rahegi
    });

    res.status(200).json({
        message: "Login Successful",
        user,
        token,
    });
});

app.listen(3000, () => {
    console.log("Server Listen At Port Number 3000.");
})