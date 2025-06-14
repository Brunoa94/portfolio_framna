import { PrismaClient, Prisma } from "@/generated/prisma";
import { handlePrismaError } from "@/utils/prisma-error";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function DELETE({ params }: { params: { id: string } }) {
  try {
    const id = Number(params?.id);

    if (isNaN(id)) {
      return NextResponse.json(
        { error: "Insert a number as id" },
        { status: 500 }
      );
    }

    await prisma.user.delete({ where: { id: Number(id) } });

    return NextResponse.json(
      { message: "Deleted Successfully" },
      {
        status: 200,
      }
    );
  } catch (e) {
    const { error, status } = handlePrismaError(e, "Delete User");
    return NextResponse.json({ error }, { status });
  }
}
