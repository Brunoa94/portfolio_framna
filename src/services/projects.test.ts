import ProjectsService from "./projects";
import { CreateProjectI, UpdateProjectI } from "@/types/project";
import { ErrorI } from "@/types/api";
import { Project } from "@/generated/prisma";

global.fetch = jest.fn();
const mockedFetch = fetch as jest.Mock;

describe("Projects Service", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("on Create project", () => {
    const newProject: CreateProjectI = {
      title: "Mock project",
      description: "Mock description",
      images: [],
    };

    it("returns project data on success", async () => {
      const mockResponse = { id: 1, ...newProject };

      mockedFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      });

      const result = await ProjectsService.createProject(newProject);
      expect(fetch).toHaveBeenCalledWith("/api/projects/", expect.any(Object));
      expect(result).toEqual(mockResponse);
    });
  });

  describe("on Update project", () => {
    const updateProject: UpdateProjectI = {
      title: "Mock project",
      description: "Mock description",
      images: [],
    };

    it("returns updated project on success", async () => {
      const mockResponse = { id: 1, ...updateProject };

      mockedFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      });

      const result = await ProjectsService.updateProject(1, updateProject);

      expect(fetch).toHaveBeenCalledWith("/api/projects/1", expect.any(Object));
      expect(result).toEqual(mockResponse);
    });

    it("throws error on response failure", async () => {
      const error: ErrorI = {
        message: "Internal server error on Project update",
        status: 500,
      };

      mockedFetch.mockResolvedValueOnce({
        ok: false,
        json: async () => error,
      });

      const response = ProjectsService.updateProject(1, updateProject);

      await expect(response).rejects.toEqual(error);
    });
  });

  describe("on Delete project", () => {
    it("returns message on success", async () => {
      const success = { message: "Deleted sucessfully", status: 200 };

      mockedFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => success,
      });

      const result = await ProjectsService.deleteProject(2);

      expect(fetch).toHaveBeenCalledWith("/api/projects/2", expect.any(Object));
      expect(result).toEqual(success);
    });
  });

  describe("on Get projects", () => {
    const mockProjects: Project[] = [
      {
        id: 1,
        title: "Project 1",
        description: "Description 1",
        images: [],
      },
      {
        id: 2,
        title: "Project 2",
        description: "Description 2",
        images: [],
      },
    ];

    it("returns List of projects", async () => {
      mockedFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => ({ projects: mockProjects }),
      });

      const result = await ProjectsService.getProjects();

      expect(fetch).toHaveBeenCalledWith(
        `${process.env.NEXT_HOSTNAME}/api/projects`,
        expect.any(Object)
      );
      expect(result).toEqual(mockProjects);
    });

    it("throw error on get list failure", async () => {
      const error: ErrorI = {
        message: "Interval server error on Get projects",
        status: 500,
      };

      mockedFetch.mockResolvedValueOnce({
        ok: false,
        json: async () => error,
      });

      const result = ProjectsService.getProjects();

      await expect(result).rejects.toEqual(error);
    });
  });
});
