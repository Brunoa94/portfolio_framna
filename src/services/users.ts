import { User } from "@/generated/prisma";
import { ErrorI, SuccessI } from "@/types/api";
import { CreateUserI } from "@/types/user";

class UsersService {
  constructor() {}

  static async deleteUser(id: number): Promise<SuccessI> {
    try {
      const response = await fetch(`/api/users/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const error = await response.json();
        return error;
      }

      const data = await response.json();

      return data;
    } catch (e) {
      throw e as ErrorI;
    }
  }

  static async createUser(body: CreateUserI): Promise<User | ErrorI> {
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const error = await response.json();
        return error;
      }

      const data = await response.json();

      return data as User;
    } catch (e: unknown) {
      return e as ErrorI;
    }
  }

  static async getUsers(): Promise<User[] | ErrorI> {
    try {
      const response = await fetch(`${process.env.NEXT_HOSTNAME}/api/users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const error = await response.json();
        return error;
      }

      const data = await response.json();

      return data as User[];
    } catch (e: unknown) {
      throw e as ErrorI;
    }
  }
}

export default UsersService;
