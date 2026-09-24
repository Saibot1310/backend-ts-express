import type { Request, Response } from "express";
import { createUserService } from "../services/user.service.js";

const userService = createUserService();

export function getUsers(_req: Request, res: Response): void {
  const users = userService.getUsers();

  res.status(200).json(users);
}

export function getUserById(req: Request, res: Response): void {
  const id = Number(req.params.id);
  const user = userService.getUserById(id);

  if (!user) {
    res.status(404).json({
      message: "User not found",
    });
    return;
  }

  res.status(200).json(user);
}

export function createUser(req: Request, res: Response): void {
  const user = userService.createUser(req.body);

  res.status(201).json(user);
}

export function updateUser(req: Request, res: Response): void {
  const id = Number(req.params.id);

  const user = userService.updateUser(id, req.body);

  if (!user) {
    res.status(404).json({
      message: "User not found",
    });
    return;
  }

  res.status(200).json(user);
}