import { Router } from "express";
import {
  createUser,
  getUserById,
  getUsers,
  updateUser,
} from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/", createUser);
userRouter.patch("/:id", updateUser);

export default userRouter;