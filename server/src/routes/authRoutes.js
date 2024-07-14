import express from "express";
const router = express.Router();

import { logout, signIn, signUp } from "../controllers/authController.js";
import { signUpSchema, signInSchema } from "../validations/authValidation.js";
import validateSchema from "../middlewares/validateSchema.js";

router.post("/sign-up", validateSchema(signUpSchema), signUp);
router.post("/sign-in", validateSchema(signInSchema), signIn);
router.post("/logout", logout);

export default router;
