import express from "express";
const router = express.Router();

import verifyToken from "../middlewares/verifyToken.js";
import { getAllUsers } from "../controllers/userController.js ";

router.get("/", verifyToken, getAllUsers);

export default router;
