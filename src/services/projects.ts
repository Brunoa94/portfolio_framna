import { ErrorI } from "@/types/api";
import {
  CreateProjectI,
  ProjectI,
  ProjectsI,
  UpdateProjectI,
} from "@/types/project";

class ProjectsService {
  constructor() {}

  static async getProjects(): Promise<ProjectI[]> {
    try {
      const response = await fetch(
        `${process.env.NEXT_HOSTNAME}/api/projects`,
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        const error = await response.json();
        return error;
      }

      const data: ProjectsI = await response.json();

      return data.projects as ProjectI[];
    } catch (e: unknown) {
      throw e as ErrorI;
    }
  }

  static async updateProject(projectId: number, updateProject: UpdateProjectI) {
    try {
      const response = await fetch(`/api/projects/${projectId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateProject),
      });

      if (!response.ok) {
        const error = await response.json();
        return error;
      }

      const data = await response.json();

      return data;
    } catch (e) {
      return e as ErrorI;
    }
  }

  static async createProject(newProject: CreateProjectI) {
    try {
      const response = await fetch(`/api/projects/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProject),
      });

      if (!response.ok) {
        const error = await response.json();
        return error;
      }

      const data = await response.json();

      return data;
    } catch (e) {
      return e as ErrorI;
    }
  }
}

export default ProjectsService;
