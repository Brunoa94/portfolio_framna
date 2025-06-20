import { create } from "zustand";
import ProjectsService from "@/services/projects";
import { Project } from "@/generated/prisma";
import { CreateProjectI, UpdateProjectI } from "@/types/project";
import { ErrorI } from "@/types/api";

export type ProjectStore = {
  projects: Project[];
  createProject: (data: CreateProjectI) => Promise<void>;
  updateProject: (projectId: number, data: UpdateProjectI) => Promise<void>;
  deleteProject: (projectId: number) => Promise<void>;
  setProjects: (data: Project[]) => void;
};

export const useProjectStore = create<ProjectStore>((set) => ({
  projects: [],

  setProjects: (data: Project[]) => set({ projects: data }),
  createProject: async (data: CreateProjectI) => {
    try {
      const newProject: Project = await ProjectsService.createProject(data);
      set((state) => ({ projects: [...state.projects, newProject] }));
    } catch (error) {
      throw error as ErrorI;
    }
  },
  updateProject: async (projectId: number, data: UpdateProjectI) => {
    try {
      const updatedProject: Project = await ProjectsService.updateProject(
        projectId,
        data
      );
      set((state) => ({
        projects: [
          updatedProject,
          ...state.projects.filter(
            (project: Project) => project.id !== projectId
          ),
        ],
      }));
    } catch (error) {
      throw error as ErrorI;
    }
  },
  deleteProject: async (projectId: number) => {
    try {
      await ProjectsService.deleteProject(projectId);
      set((state) => ({
        projects: [
          ...state.projects.filter(
            (project: Project) => project.id !== projectId
          ),
        ],
      }));
    } catch (error) {
      throw error as ErrorI;
    }
  },
}));
