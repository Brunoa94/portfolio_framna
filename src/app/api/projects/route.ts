import { Project } from "@/types/project";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient, Prisma } from "@/generated/prisma";

const prisma = new PrismaClient();

interface CreateProjectI {
  data: Prisma.ProjectCreateInput;
}

export async function GET(request: NextRequest) {
  try {
    const projects: Project[] = await prisma.project.findMany();

    return new Response(JSON.stringify({ projects }), { status: 200 });
  } catch (error) {
    throw new Error("Internal Server Error");
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
  } catch (error) {
    throw new Error("Internal Server Error" + error);
  }
}
