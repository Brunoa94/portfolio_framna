import { Prisma } from "@/generated/prisma";

export interface CreateProjectI extends Prisma.ProjectCreateInput {}
export interface UpdateProjectI extends Omit<Prisma.ProjectUpdateInput, "id"> {}
