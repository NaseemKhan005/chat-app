import express from "express";
const router = express.Router();

import verifyToken from "../middlewares/verifyToken.js";
import { sendMessage, getMessages } from "../controllers/messageController.js";

router.post("/send/:id", verifyToken, sendMessage);
router.get("/:id", verifyToken, getMessages);

export default router;
