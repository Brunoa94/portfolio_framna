import { NextRequest, NextResponse } from "next/server";
import { Prisma, PrismaClient } from "@/generated/prisma";
import { handlePrismaError } from "@/utils/prisma-error";

const prisma = new PrismaClient();

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: number }> }
) {
  try {
    const id = (await params).id;
    const body = await request.json();

    const updateProject = await prisma.project.update({
      where: { id },
      data: body,
    });

    return NextResponse.json(updateProject, { status: 200 });
  } catch (e) {
    const { error, status } = handlePrismaError(e, "Update Project");
    return NextResponse.json({ error }, { status });
  }
}

export async function DELETE({ params }: { params: Promise<{ id: number }> }) {
  try {
    const id = (await params).id;

    await prisma.project.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Project deleted successfully" },
      { status: 200 }
    );
  } catch (e) {
    const { error, status } = handlePrismaError(e, "Delete Project");
    return NextResponse.json({ error }, { status });
  }
}
