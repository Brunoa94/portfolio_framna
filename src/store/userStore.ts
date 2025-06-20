import { create } from "zustand";
import { ErrorI } from "@/types/api";
import { CreateUserI } from "@/types/user";
import UsersService from "@/services/users";
import { User } from "@/generated/prisma";

export type UserStore = {
  users: User[];
  createUser: (data: CreateUserI) => Promise<void>;
  deleteUser: (userId: number) => Promise<void>;
  setUsers: (data: User[]) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  users: [],

  setUsers: (data: User[]) => set({ users: data }),
  createUser: async (data: CreateUserI) => {
    try {
      const newUser: User = await UsersService.createUser(data);
      set((state) => ({ users: [...state.users, newUser] }));
    } catch (error) {
      throw error as ErrorI;
    }
  },
  deleteUser: async (userId: number) => {
    try {
      await UsersService.deleteUser(userId);
      set((state) => ({
        users: [...state.users.filter((user: User) => user.id !== userId)],
      }));
    } catch (error) {
      throw error as ErrorI;
    }
  },
}));
