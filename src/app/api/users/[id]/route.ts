import { PrismaClient } from "@/generated/prisma";
import { handlePrismaError } from "@/utils/prisma-error";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function DELETE({ params }: { params: { id: number } }) {
  try {
    const { id } = params;

    await prisma.user.delete({ where: { id } });

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
