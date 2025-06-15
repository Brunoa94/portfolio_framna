import { PrismaClient, Prisma } from "@/generated/prisma";
import { handlePrismaError } from "@/utils/prisma-error";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function DELETE({ params }: { params: Promise<{ id: number }> }) {
  try {
    const id = (await params)?.id;

    await prisma.user.delete({ where: { id } });

    return NextResponse.json(
      { message: "Deleted Successfully" },
      {
        status: 200,
      }
    );
  } catch (e) {
    console.log("Error: " + e);
    const { error, status } = handlePrismaError(e, "Delete User");
    return NextResponse.json({ error }, { status });
  }
}
