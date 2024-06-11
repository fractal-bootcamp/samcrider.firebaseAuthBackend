import express from "express";
import { UserOutputDto } from "./types";

const authRouter = express.Router();

declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
        email: string;
      };
    }
  }
}

authRouter.get("/logout", (req, res) => {
  // logout app user
});

authRouter.post("/hydrate", async (req, res) => {
  // hydrate app user
});

authRouter.post("/login", async (req, res) => {
  // user was found in db in requireAuth middleware
  //get user out of req
  console.log("right before found user", req);
  const foundUser: UserOutputDto = req.user;
  res.status(200).send(foundUser);
});

authRouter.post("/signup", async (req, res) => {
  // user was added to db in requiresAuth middleware
  // get user out of req
  console.log("right before newUser defined", req);
  const newUser: UserOutputDto = req.user;
  console.log("hello from authrouter post", newUser);
  // send user to frontend
  res.status(201).send(newUser);
});

authRouter.get("/", (_req, res) => {
  res.send("hello base auth route");
});

export default authRouter;
