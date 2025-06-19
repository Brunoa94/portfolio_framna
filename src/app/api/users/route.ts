import { PrismaClient, User } from "@/generated/prisma";
import { NextRequest, NextResponse } from "next/server";
import { handlePrismaError } from "@/utils/prisma-error";
import { hashPassword } from "@/lib/passwords";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const users: User[] = await prisma.user.findMany();

    return NextResponse.json(users, { status: 200 });
  } catch (e) {
    const { message, status } = handlePrismaError(e, "Get Users");
    return NextResponse.json({ message, status }, { status });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password } = body;

    const hashedPassword = await hashPassword(password);

    const newUser = await prisma.user.create({
      data: { username, password: hashedPassword },
      select: {
        id: true,
        username: true,
      },
    });

    return NextResponse.json(newUser, { status: 200 });
  } catch (e) {
    const { message, status } = handlePrismaError(e, "Create User");
    return NextResponse.json({ message, status }, { status });
  }
}
