import { PrismaClient, Prisma } from "@/generated/prisma";

const userData: Prisma.UserCreateInput[] = [
  {
    username: "bruno",
    password: "framna",
  },
  {
    username: "admin",
    password: "admin",
  },
];

export async function main() {
  const prisma = new PrismaClient();
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }
}

main();
