import { PrismaClient, Prisma } from "@/generated/prisma";

const userData: Prisma.AdminCreateInput[] = [
  {
    username: "test",
    password: "test",
  },
];

export async function main() {
  const prisma = new PrismaClient();
  for (const u of userData) {
    await prisma.admin.create({ data: u });
  }
}

main();
