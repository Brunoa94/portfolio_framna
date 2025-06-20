import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { handlePrismaError } from "@/utils/prisma-error";
import { UpdateProjectI } from "@/types/project";

const prisma = new PrismaClient();

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body: UpdateProjectI = await request.json();

    const { userId, ...data } = body;

    const updateProject = await prisma.project.update({
      where: { id: Number(id) },
      data: {
        ...data,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });

    return NextResponse.json(updateProject, { status: 200 });
  } catch (e) {
    const { message, status } = handlePrismaError(e, "Update Project");
    return NextResponse.json({ message, status }, { status });
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  try {
    await prisma.project.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json(
      { message: "Project deleted successfully" },
      { status: 200 }
    );
  } catch (e) {
    const { message, status } = handlePrismaError(e, "Delete Project");
    return NextResponse.json({ message, status }, { status });
  }
}
