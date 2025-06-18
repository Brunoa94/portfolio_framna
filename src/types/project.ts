import { Prisma, Project } from "@/generated/prisma";

export interface CreateProjectI
  extends Omit<Prisma.ProjectCreateInput, "user"> {
  userId: number;
}

export interface UpdateProjectI
  extends Omit<Prisma.ProjectUpdateInput, "id" | "user"> {
  userId?: number;
}

export interface ProjectsI {
  projects: Project[];
}
