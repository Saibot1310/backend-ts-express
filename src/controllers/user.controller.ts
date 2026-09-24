import type { Request, Response } from "express";
import { createUserService } from "../services/user.service.js";

const userService = createUserService();

export function getUsers(_req: Request, res: Response): void {
  const users = userService.getUsers();

  res.status(200).json(users);
}