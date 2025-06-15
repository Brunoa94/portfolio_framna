import { Prisma } from "@/generated/prisma";

export interface ProjectI extends Prisma.ProjectGetPayload<{}> {}

export interface CreateProjectI
  extends Omit<Prisma.ProjectCreateInput, "user"> {
  userId: number;
}

export interface UpdateProjectI
  extends Omit<Prisma.ProjectUpdateInput, "id" | "user"> {
  userId?: number;
}

export interface ProjectsI {
  projects: ProjectI[];
}
