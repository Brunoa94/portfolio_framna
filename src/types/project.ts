/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Prisma, Project } from "@/generated/prisma";

export interface CreateProjectI
  extends Omit<Prisma.ProjectCreateInput, "user"> {}

export interface UpdateProjectI extends Omit<Prisma.ProjectUpdateInput, "id"> {}

export interface ProjectsI {
  projects: Project[];
}
