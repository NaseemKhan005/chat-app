export const sendMessage = async (req, res, next) => {
  try {
    res.status(200).json({ message: "Message sent" });
  } catch (error) {
    next(error);
  }
};
