import { Prisma, Admin } from "@/generated/prisma";

export interface CreateAdminI extends Prisma.AdminCreateInput {}
export interface LoginAdminI {
  username: string;
  password: string;
}

export interface AdminsList {
  admins: Admin[];
}
