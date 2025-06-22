import { Admin } from "@/generated/prisma";
import { ErrorI, SuccessI } from "@/types/api";
import { CreateAdminI } from "@/types/admin";

class AdminsService {
  constructor() {}

  static async deleteAdmin(id: number): Promise<SuccessI> {
    try {
      const response = await fetch(`/api/admins/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const error = await response.json();
        throw error as ErrorI;
      }

      const data = await response.json();

      return data;
    } catch (e) {
      throw e as ErrorI;
    }
  }

  static async createAdmin(body: CreateAdminI): Promise<Admin> {
    try {
      const response = await fetch("/api/admins", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const error = await response.json();
        throw error as ErrorI;
      }

      const data = await response.json();

      return data as Admin;
    } catch (error) {
      throw error as ErrorI;
    }
  }

  static async getAdmins(): Promise<Admin[]> {
    try {
      const response = await fetch(`${process.env.NEXT_HOSTNAME}/api/admins`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const error = await response.json();
        throw error as ErrorI;
      }

      const data = await response.json();

      return data as Admin[];
    } catch (e: unknown) {
      throw e as ErrorI;
    }
  }
}

export default AdminsService;
