import User from "../model/userSchema.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// * Token Creation
const createToken = (id, email) => {
    // ? handle Error
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT Secret Key Is Missing");
    }
    const token = jwt.sign({ id, email }, process.env.JWT_SECRET, { expiresIn: "1h" });
    return token;
}

const cookieOption = {
    httpOnly: true,
    secure: false,
    maxAge: 60 * 60 * 1000
}

export const signup = async (req, res) => {
    try {
        const { name, age, email, password } = req.body;
        // * check if required field is missing or not
        if (!email || !password || !name) {
            return res.status(400).json(
                {
                    message: "Email, password & name Is Mendatory For SignUp",
                }
            );
        }

        // * check this email already exist or not
        const isExist = await User.findOne({ email });

        if (isExist) {
            return res.status(409).json(
                {
                    message: "Email Already Exist. Try With A Different Email",
                }
            );
        }

        // * password hash --> password, salt
        const hashedPassword = await bcrypt.hash(password, 12);
        // * Create Profile Now
        const user = await User.create(
            {
                name,
                age,
                email,
                password: hashedPassword
            }
        );
        //  * create Token
        const token = createToken(user._id, email);

        // * send cookies
        res.cookie("token", token, cookieOption);

        // * Send Response
        return res.status(201).json(
            {
                message: "User Created Successfully",
                name,
                age,
                email
            }
        )
    } catch (err) {
        console.log(err);
        return res.status(500).json(
            {
                message: "Internal Server Error"
            }
        );
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        // * check field missing or not?
        if (!email || !password) {
            return res.status(400).json(
                {
                    message: "Some Field Is Missing"
                }
            );
        }
        // * Find User
        const user = await User.findOne({ email });
        // * check user Exist or Not
        if (!user) {
            return res.status(401).json({
                message: "Invalid credentials"
            });
        }

        // * if user Found -> check password 
        const isPasswordMatch = await bcrypt.compare(
            password,
            user.password
        );
        // ? check password is correct or not
        if (!isPasswordMatch) {
            return res.status(401).json(
                {
                    message: "Invalid credentials."
                }
            );
        }
        // * create token
        const token = createToken(user._id, email);
        // * send in cookie
        res.cookie("token", token, cookieOption);

        // * send Response
        return res.status(200).json({
            message: "User LoggedIn Successfully.",
            name: user.name,
            email: user.email
        });
    } catch (err) {
        console.log(err.message);
        return res.status(500).json(
            {
                message: "Internal Server Error"
            }
        );
    }
}

export const logout = async (req, res) => {
    try {
        // * remove JWT cookie
        res.clearCookie("token", cookieOption);

        // * send response
        return res.status(200).json({
            message: "Logout Successfully"
        });
    } catch (err) {

        console.log(err.message);

        return res.status(500).json({
            message: "Internal Server Error"
        });

    }
};

export const profile = async (req, res) => {
    try {
        // * middleware already authenticate the user.
        // TODO - send the profile information
        const user = req.user; // * already present (update by userAuthMiddleware)
        res.status(200).json(
            {
                name: user.name,
                age: user.age,
                usage: user.usage,
                email: user.email
            }
        );

    } catch (err) {
        console.log(err.message);

        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}