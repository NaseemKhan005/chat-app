import jwt from "jsonwebtoken";

import handleError from "../utils/handleError.js";
import { config } from "../config/config.js";
import User from "../models/userModel.js";

const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies.access_token;
    if (!token) return next(handleError(401, "Unauthorized"));

    const decoded = jwt.verify(token, config.jwtSecret);
    if (!decoded) return next(handleError(403, "Token is invalid"));

    const user = await User.findById(decoded.userId).select("-password");
    if (!user) return next(handleError(404, "User not found"));

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

export default verifyToken;
