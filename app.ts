import express from "express";
import cors from "cors";
import authRouter from "./controllers/Auth/auth";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5174",
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/auth", authRouter);

export default app;
