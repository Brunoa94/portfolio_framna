import { Prisma } from "@/generated/prisma";
import { ErrorI } from "@/types/api";

export function handlePrismaError(error: unknown, endpoint: string): ErrorI {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {
      case "P2002":
        return {
          status: 409,
          message: "The value you're trying to update must be unique",
        };
      case "P2025":
        return {
          status: 404,
          message: "No item for this ID",
        };
      case "P2003":
        return {
          status: 400,
          message: "Trying to connect to a non-existent item",
        };
      case "P2002":
        return {
          status: 409,
          message: "A user already exists with the same username",
        };
      default:
        return {
          status: 500,
          message: error.message,
        };
    }
  }

  return {
    status: 500,
    message: "Internal server error on " + endpoint,
  };
}
