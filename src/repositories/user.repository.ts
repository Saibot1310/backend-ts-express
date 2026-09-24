import { users } from "../data/users.data.js";
import type { User } from "../models/user.model.js";

export function createUserRepository() {
  function findAll(): User[] {
    return users;
  }

  function findById(id: number): User | undefined {
    return users.find((user) => user.id === id);
  }

  function create(user: User): User {
    users.push(user);

    return user;
  }

  return {
    findAll,
    findById,
    create,
  };
}