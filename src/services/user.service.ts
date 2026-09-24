import type { User } from "../models/user.model.js";
import { createUserRepository } from "../repositories/user.repository.js";

export function createUserService() {
  const userRepository = createUserRepository();

  function getUsers(): User[] {
    return userRepository.findAll();
  }

  function getUserById(id: number): User | undefined {
    return userRepository.findById(id);
  }

  return {
    getUsers,
    getUserById,
  };
}