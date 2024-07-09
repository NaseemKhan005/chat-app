import express from "express";
import { logout, signIn, signUp } from "../controllers/authController.js";
import signUpSchema from "../validations/authValidation.js";
import validateSchema from "../middlewares/validateSchema.js";
const router = express.Router();

router.post("/sign-up", validateSchema(signUpSchema), signUp);
router.post("/sign-in", signIn);
router.post("/logout", logout);

export default router;
