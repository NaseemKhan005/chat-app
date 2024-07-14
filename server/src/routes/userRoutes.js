import express from "express";
const router = express.Router();

import verifyToken from "../middlewares/verifyToken.js";
import { getAllUsers, getUser } from "../controllers/userController.js ";

router.get("/", verifyToken, getAllUsers);
router.get("/:id", verifyToken, getUser);

export default router;
