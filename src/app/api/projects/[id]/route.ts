import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { handlePrismaError } from "@/utils/prisma-error";
import { UpdateProjectI } from "@/types/project";

const prisma = new PrismaClient();

export async function PATCH(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const { params } = context;
    const { id } = params;

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
    const { error, status } = handlePrismaError(e, "Update Project");
    return NextResponse.json({ error }, { status });
  }
}

export async function DELETE(context: { params: { id: string } }) {
  const { params } = context;
  const { id } = params;

  try {
    const response = await prisma.project.delete({
      where: { id: Number(id) },
    });

    console.log("RESPONSE: " + JSON.stringify(response));

    return NextResponse.json(
      { message: "Project deleted successfully" },
      { status: 200 }
    );
  } catch (e) {
    const { error, status } = handlePrismaError(e, "Delete Project");
    return NextResponse.json({ error }, { status });
  }
}
