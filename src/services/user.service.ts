import type { User } from "../models/user.model.js";
import { createUserRepository } from "../repositories/user.repository.js";

type CreateUserData = Omit<User, "id">;

export function createUserService() {
  const userRepository = createUserRepository();

  function getUsers(): User[] {
    return userRepository.findAll();
  }

  function getUserById(id: number): User | undefined {
    return userRepository.findById(id);
  }

  function createUser(data: CreateUserData): User {
    const users = userRepository.findAll();

    const nextId =
      users.length > 0
        ? Math.max(...users.map((user) => user.id)) + 1
        : 1;

    const user: User = {
      id: nextId,
      ...data,
    };

    return userRepository.create(user);
  }

  return {
    getUsers,
    getUserById,
    createUser,
  };
}