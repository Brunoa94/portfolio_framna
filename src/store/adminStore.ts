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
  updateLoading: (value: boolean) => void;
  isLoading: boolean;
};

export const useAdminStore = create<AdminStore>((set) => ({
  admins: [],
  isLoading: false,

  setAdmins: (data: Admin[]) => set({ admins: data }),
  updateLoading: (value: boolean) => set({ isLoading: value }),
  createAdmin: async (data: CreateAdminI) => {
    set(() => ({ isLoading: true }));
    try {
      const newUser: Admin = await AdminsService.createAdmin(data);
      set((state: AdminStore) => ({ admins: [...state.admins, newUser] }));
    } catch (error) {
      throw error as ErrorI;
    }
    set(() => ({ isLoading: false }));
  },
  deleteAdmin: async (userId: number) => {
    set(() => ({ isLoading: true }));
    try {
      await AdminsService.deleteAdmin(userId);
      set((state: AdminStore) => ({
        admins: [...state.admins.filter((user: Admin) => user.id !== userId)],
      }));
    } catch (error) {
      throw error as ErrorI;
    }
    set(() => ({ isLoading: true }));
  },
}));
