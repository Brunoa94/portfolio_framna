import { PrismaClient } from "@/generated/prisma";
import { handlePrismaError } from "@/utils/prisma-error";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  try {
    await prisma.user.delete({ where: { id: Number(id) } });

    return NextResponse.json(
      { message: "Deleted Successfully" },
      {
        status: 200,
      }
    );
  } catch (e) {
    const { message, status } = handlePrismaError(e, "Delete User");
    return NextResponse.json({ message, status }, { status });
  }
}
