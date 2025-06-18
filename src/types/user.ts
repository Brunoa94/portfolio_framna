import { Prisma, User } from "@/generated/prisma";

export interface CreateUserI extends Prisma.UserCreateInput {}
export interface LoginUserI {
  username: string;
  password: string;
}

export interface UsersList {
  users: User[];
}
