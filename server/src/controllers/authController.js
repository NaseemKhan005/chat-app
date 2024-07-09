import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

import User from "../model/userModel.js";
import handleError from "../utils/handleError.js";

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

    res.status(201).json({ message: `Welcome ${name}`, user: userInfo });
  } catch (error) {
    next(error);
  }
};

export const signIn = async (req, res, next) => {
  try {
    res.send("Sign in route");
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res, next) => {
  try {
    res.send("Logout route");
  } catch (error) {
    next(error);
  }
};
