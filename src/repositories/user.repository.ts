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

  function update(
    id: number,
    data: Partial<Omit<User, "id">>,
  ): User | undefined {
    const user = findById(id);

    if (!user) {
      return undefined;
    }

    Object.assign(user, data);

    return user;
  }

  function remove(id: number): boolean {
  const index = users.findIndex((user) => user.id === id);

  if (index === -1) {
    return false;
  }

  users.splice(index, 1);

  return true;
}

  return {
    findAll,
    findById,
    create,
    update,
    remove,
  };
}