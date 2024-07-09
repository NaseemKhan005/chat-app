import { z } from "zod";

const signUpSchema = z.object({
  // username: z
  //   .string({ required_error: "Username is required" })
  //   .trim()
  //   .regex(/^[a-zA-Z0-9_]+$/, {
  //     message: "Username can only contain letters, numbers, and underscores",
  //   })
  //   .min(3, { message: "Username must be at least 3 characters long" })
  //   .max(20, { message: "Username must be at most 20 characters long" }),

  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(20, { message: "Name must be at most 20 characters long" }),

  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email address"),

  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(20, { message: "Password must be at most 20 characters long" }),
});

export default signUpSchema;
