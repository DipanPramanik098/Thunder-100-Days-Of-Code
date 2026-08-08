import jwt from 'jsonwebtoken';
import User from '../model/userSchema.js';

const authUserMiddleware = async (req, res, next) => {
    try {
        // * get token first
        const { token } = req.cookies;
        // * Token Missing Check
        if (!token) {
            return res.status(401).json({
                message: "Please login first"
            });
        }
        // * verify token
        const payload = jwt.verify(token, process.env.JWT_SECRET);

        // * findUser
        const user = await User.findOne({
            _id: payload.id
        });

        // * user Not Exist
        if (!user) {
            return res.status(404).json(
                {
                    message: "User Does Not Exist",
                }
            );
        }

        // * store logged-in user data for next middleware/routeuser ko  
        req.user = user;
        // * call next 
        return next();
    } catch (err) {
        console.log(err.message);
        return res.status(401).json(
            {
                message: "Invalid or Expired Token"
            }
        )
    }
}

export default authUserMiddleware;