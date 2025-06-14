import { PrismaClient, Prisma } from "@/generated/prisma";
import { ErrorI } from "@/types/api";

const prisma = new PrismaClient();

export async function DELETE({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;

  try {
    await prisma.user.delete({ where: { id: Number(id) } });

    return new Response(JSON.stringify({ message: "Deleted Successfully" }), {
      status: 200,
    });
  } catch (error) {
    let responseBody: ErrorI;
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        responseBody = {
          status: 404,
          error: "User not found",
        };

        return new Response(JSON.stringify(responseBody), { status: 404 });
      }

      responseBody = {
        status: 500,
        error: error.message,
      };

      return new Response(JSON.stringify(responseBody), { status: 500 });
    }

    responseBody = {
      status: 500,
      error: "Internal server error on Delete",
    };

    return new Response(JSON.stringify(responseBody), { status: 500 });
  }
}
