import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

import User from "../models/userModel.js";
import handleError from "../utils/handleError.js";
import generateToken from "../utils/generateToken.js";

export const signUp = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.findOne({ email });
    if (user) return next(handleError(400, "User already registered"));

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      username: name.toLowerCase().split(" ").join("") + uuidv4().slice(0, 5),
      email,
      password: hashedPassword,
    });

    const { password: userPassword, ...userInfo } = newUser._doc;
    const access_token = generateToken(newUser._id, res);

    res
      .status(201)
      .json({ message: `Welcome ${name}`, user: userInfo, access_token });
  } catch (error) {
    next(error);
  }
};

export const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return next(handleError(400, "Invalid email or password"));

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return next(handleError(400, "Invalid email or password"));

    const { password: userPassword, ...userInfo } = user._doc;
    const access_token = generateToken(user._id, res);

    res.status(200).json({
      message: `Welcome back ${userInfo.name}`,
      user: userInfo,
      access_token,
    });
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res, next) => {
  try {
    res
      .clearCookie("access_token")
      .status(200)
      .json({ message: "Logged out successful" });
  } catch (error) {
    next(error);
  }
};
