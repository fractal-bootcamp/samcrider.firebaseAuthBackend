import express from "express";

const authRouter = express.Router();

authRouter.get("/logout", (req, res) => {
  // logout app user
});

authRouter.post("/hydrate", async (req, res) => {
  // hydrate app user
});

authRouter.post("/login", async (req, res) => {
  // login app user
});

authRouter.post("/signup", async (req, res) => {
  // signup app user
});

authRouter.get("/", (req, res) => {
  res.send("hello base auth route");
});

export default authRouter;
