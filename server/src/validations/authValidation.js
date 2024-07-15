import { z } from "zod";

const signUpSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .nonempty({ message: "Name is required" })
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(20, { message: "Name must be at most 20 characters long" }),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .nonempty({ message: "Email is required" })
    .email("Invalid email address"),

  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .nonempty({ message: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(20, { message: "Password must be at most 20 characters long" }),
});

const signInSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .nonempty({ message: "Email is required" })
    .email("Invalid email address"),

  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .nonempty({ message: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(20, { message: "Password must be at most 20 characters long" }),
});

export { signUpSchema, signInSchema };
