import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";

const app = express();
// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("<h1>Server is running...</h1>");
});

app.use("/api/v1/auth", authRoutes);

export default app;
