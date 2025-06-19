import { NextRequest, NextResponse } from "next/server";
import { PrismaClient, Prisma, Project } from "@/generated/prisma";
import { handlePrismaError } from "@/utils/prisma-error";

const prisma = new PrismaClient();

interface CreateProjectI {
  data: Prisma.ProjectCreateInput;
}

export async function GET() {
  try {
    const projects: Project[] = await prisma.project.findMany();

    return new Response(JSON.stringify({ projects }), { status: 200 });
  } catch (e) {
    const { message, status } = handlePrismaError(e, "List Projects");
    return NextResponse.json({ message, status }, { status });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, description, technologies, userId, images } = body;

    const newProject: Project = await prisma.project.create<CreateProjectI>({
      data: {
        title,
        description,
        technologies,
        images,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });

    return NextResponse.json(newProject, { status: 200 });
  } catch (e) {
    const { message, status } = handlePrismaError(e, "Create Project");
    return NextResponse.json({ message, status }, { status });
  }
}
