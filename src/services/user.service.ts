import type { User } from "../models/user.model.js";
import { createUserRepository } from "../repositories/user.repository.js";

export function createUserService() {
  const userRepository = createUserRepository();

  function getUsers(): User[] {
    return userRepository.findAll();
  }

  return {
    getUsers,
  };
}