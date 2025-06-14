import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Prisma } from "@/generated/prisma";
import { User } from "@/types/auth";
import { ErrorI, SuccessI } from "@/types/api";
import { NextRequest, NextResponse } from "next/server";
import { handlePrismaError } from "@/utils/prisma-error";

interface CreateUserI {
  data: Prisma.UserCreateInput;
}

const prisma = new PrismaClient();

export async function GET() {
  try {
    const users: User[] = await prisma.user.findMany();

    return NextResponse.json(users, { status: 200 });
  } catch (e) {
    const { error, status } = handlePrismaError(e, "Get Users");
    return NextResponse.json({ error }, { status });
  }
}

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const body = await request.json();
    const { username, password } = body;

    const newUser: User = await prisma.user.create<CreateUserI>({
      data: { username, password },
    });

    return NextResponse.json(newUser, { status: 200 });
  } catch (e) {
    const { error, status } = handlePrismaError(e, "Create User");
    return NextResponse.json({ error }, { status });
  }
}
