import { users } from "../data/users.data.js";
import type { User } from "../models/user.model.js";

export function createUserRepository() {
  function findAll(): User[] {
    return users;
  }

  return {
    findAll,
  };
}