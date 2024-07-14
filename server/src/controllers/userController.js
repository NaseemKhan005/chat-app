import User from "../models/userModel.js";

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
