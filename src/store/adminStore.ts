import { create } from "zustand";
import { ErrorI } from "@/types/api";
import { CreateAdminI } from "@/types/admin";
import AdminsService from "@/services/admins";
import { Admin } from "@/generated/prisma";

export type AdminStore = {
  admins: Admin[];
  createAdmin: (data: CreateAdminI) => Promise<void>;
  deleteAdmin: (userId: number) => Promise<void>;
  setAdmins: (data: Admin[]) => void;
};

export const useAdminStore = create<AdminStore>((set) => ({
  admins: [],

  setAdmins: (data: Admin[]) => set({ admins: data }),
  createAdmin: async (data: CreateAdminI) => {
    try {
      const newUser: Admin = await AdminsService.createAdmin(data);
      set((state: AdminStore) => ({ admins: [...state.admins, newUser] }));
    } catch (error) {
      throw error as ErrorI;
    }
  },
  deleteAdmin: async (userId: number) => {
    try {
      await AdminsService.deleteAdmin(userId);
      set((state: AdminStore) => ({
        admins: [...state.admins.filter((user: Admin) => user.id !== userId)],
      }));
    } catch (error) {
      throw error as ErrorI;
    }
  },
}));
