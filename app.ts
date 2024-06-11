import express from "express";
import cors from "cors";
import authRouter from "./lib/controllers/Auth/auth";
import { requireAuth } from "./utils/requireAuth";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5174",
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/auth", requireAuth, authRouter);

export default app;
