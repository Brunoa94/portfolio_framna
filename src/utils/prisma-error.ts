import { Prisma } from "@/generated/prisma";
import { ErrorI } from "@/types/api";

export function handlePrismaError(error: unknown, endpoint: string): ErrorI {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {
      case "P2002":
        return {
          status: 409,
          error: "The value you're trying to update must be unique",
        };
      case "P2025":
        return {
          status: 404,
          error: "No item for this ID",
        };
      case "P2003":
        return {
          status: 400,
          error: "Trying to connect to a non-existent item",
        };
      case "P2002":
        return {
          status: 409,
          error: "A user already exists with the same username",
        };
      default:
        return {
          status: 500,
          error: error.message,
        };
    }
  }

  return {
    status: 500,
    error: "Internal server error on " + endpoint,
  };
}
