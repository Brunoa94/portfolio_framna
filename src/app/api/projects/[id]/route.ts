import { Project } from "@/types/project";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient, Prisma } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const id = Number((await params).id);
    const body = await request.json();

    if (isNaN(id)) {
      return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
    }

    const updateProject = await prisma.project.update({
      where: { id },
      data: body,
    });

    return NextResponse.json(updateProject, { status: 200 });
  } catch (error) {
    throw new Error("Internal Server Error " + error);
  }
}

export function DELETE(request: NextRequest) {
  try {
    return new Response(JSON.stringify(""), { status: 200 });
  } catch (error) {
    throw new Error("Internal Server Error");
  }
}
