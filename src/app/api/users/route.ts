import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Prisma } from "@/generated/prisma";
import { User } from "@/types/auth";
import { ErrorI, SuccessI } from "@/types/api";
import { NextRequest, NextResponse } from "next/server";

interface CreateUserI {
  data: Prisma.UserCreateInput;
}

const prisma = new PrismaClient();

export async function GET(response: NextResponse) {
  try {
    const users: User[] = await prisma.user.findMany();

    return NextResponse.json(users, { status: 200 });
  } catch (error: unknown) {
    let errorBody: ErrorI;

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2021") {
        errorBody = {
          status: 500,
          error: "Table Users not found.",
        };

        return NextResponse.json(errorBody, { status: 500 });
      }

      errorBody = {
        status: 500,
        error: error.message,
      };

      return NextResponse.json(errorBody, { status: 500 });
    }

    errorBody = {
      status: 500,
      error: "Internal server error on Post User",
    };

    return NextResponse.json(errorBody, { status: 500 });
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
  } catch (error: unknown) {
    let errorBody: ErrorI;

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        errorBody = {
          status: 409,
          error: "A user already exists with the same username",
        };

        return NextResponse.json(errorBody, { status: 409 });
      }

      errorBody = {
        status: 500,
        error: error.message,
      };
    }

    errorBody = {
      status: 500,
      error: "Internal server error on Post User",
    };

    return NextResponse.json(errorBody, { status: 500 });
  }
}
