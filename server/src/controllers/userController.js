import User from "../models/userModel.js";
import handleError from "../utils/handleError.js";

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({ _id: { $ne: req.user._id } }).select(
      "-password"
    );

    if (!users)
      return res.status(200).json({ message: "No users found", users: [] });

    res.status(200).json({ message: "All users fetched successfully", users });
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select("-password");

    if (!user) return next(handleError("User not found", 404));

    res.status(200).json({ message: "User fetched successfully", user });
  } catch (error) {
    next(error);
  }
};
