import express from "express";
const router = express.Router();

import verifyToken from "../middlewares/verifyToken.js";
import { sendMessage } from "../controllers/messageController.js";

router.post("/send/:id", verifyToken, sendMessage);

export default router;
