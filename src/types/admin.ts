import { Prisma, Admin } from "@/generated/prisma";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface CreateAdminI extends Prisma.AdminCreateInput {}
export interface LoginAdminI {
  username: string;
  password: string;
}

export interface AdminsList {
  admins: Admin[];
}
