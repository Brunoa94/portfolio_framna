import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { handlePrismaError } from "@/utils/prisma-error";
import { UpdateProjectI } from "@/types/project";
import { ErrorI } from "@/types/api";

const prisma = new PrismaClient();

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = Number((await params)?.id);

    if (isNaN(id)) {
      const error: ErrorI = {
        status: 500,
        error: "Insert a number as id",
      };

      return NextResponse.json({ error }, { status: 500 });
    }

    const body: UpdateProjectI = await request.json();

    const { userId, ...data } = body;

    const updateProject = await prisma.project.update({
      where: { id: Number(id) },
      data: {
        ...data,
        user: {
          connect: {
            id: body.userId,
          },
        },
      },
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
