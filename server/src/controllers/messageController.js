import Conversation from "../models/conversationModal.js";
import Message from "../models/messageModal.js";

export const sendMessage = async (req, res, next) => {
  try {
    const { message } = req.body;
    const receiverId = req.params.id;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = new Conversation({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      sender: senderId,
      receiver: receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    await Promise.all([newMessage.save(), conversation.save()]);

    res
      .status(201)
      .json({ message: "Message sent successfully", message: newMessage });
  } catch (error) {
    next(error);
  }
};

export const getMessages = async (req, res, next) => {
  try {
    const { id: userToChat } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChat] },
    }).populate("messages");

    res
      .status(200)
      .json({
        message: "All messages fetched successfully",
        messages: conversation.messages,
      });
  } catch (error) {
    next(error);
  }
};
