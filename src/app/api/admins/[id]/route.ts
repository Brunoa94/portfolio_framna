import { PrismaClient } from "@/generated/prisma";
import { handlePrismaError } from "@/utils/prisma-error";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;

  try {
    await prisma.admin.delete({ where: { id: Number(id) } });

    return NextResponse.json(
      { message: "Deleted Successfully" },
      {
        status: 200,
      }
    );
  } catch (e) {
    const { message, status } = handlePrismaError(e, "Delete Admin");
    return NextResponse.json({ message, status }, { status });
  }
}
