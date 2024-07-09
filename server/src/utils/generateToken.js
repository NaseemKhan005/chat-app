import jwt from "jsonwebtoken";

import { config } from "../config/config.js";

const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, config.jwtSecret, {
    expiresIn: "15d",
  });

  res.cookie("access_token", token, {
    httpOnly: true,
    maxAge: 15 * 24 * 60 * 60 * 1000,
    secure: config.env !== "development",
    sameSite: config.env !== "development" && "None",
  });
};

export default generateToken;
