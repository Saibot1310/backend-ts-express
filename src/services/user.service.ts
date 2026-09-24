import type { User } from "../models/user.model.js";
import { createUserRepository } from "../repositories/user.repository.js";

type CreateUserData = Omit<User, "id">;
type UpdateUserData = Partial<Omit<User, "id">>;

export function createUserService() {
  const userRepository = createUserRepository();

  function getUsers(): User[] {
    return userRepository.findAll();
  }

  function getUserById(id: number): User | undefined {
    return userRepository.findById(id);
  }

  function createUser(data: CreateUserData): User {
    if (!data.name || typeof data.name !== "string") {
      throw new Error("Name is required");
    }

    if (!data.email || typeof data.email !== "string") {
      throw new Error("Email is required");
    }

    if (typeof data.age !== "number" || data.age <= 0) {
      throw new Error("Age must be a positive number");
    }

    const existingUser = userRepository
      .findAll()
      .find((user) => user.email === data.email);

    if (existingUser) {
      throw new Error("Email is already in use");
    }

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

  function updateUser(
  id: number,
  data: UpdateUserData,
): User | undefined {
  const existingUser = userRepository.findById(id);

  if (!existingUser) {
    return undefined;
  }

  if (data.email) {
    const emailInUse = userRepository
      .findAll()
      .some(
        (user) =>
          user.email === data.email && user.id !== id,
      );

    if (emailInUse) {
      throw new Error("Email is already in use");
    }
  }

  if (data.name !== undefined && typeof data.name !== "string") {
    throw new Error("Name must be a string");
  }

  if (data.email !== undefined && typeof data.email !== "string") {
    throw new Error("Email must be a string");
  }

  if (data.age !== undefined && (typeof data.age !== "number" || data.age <= 0)) {
    throw new Error("Age must be a positive number");
  }

  return userRepository.update(id, data);
}

  return {
    getUsers,
    getUserById,
    createUser,
    updateUser,
  };
}