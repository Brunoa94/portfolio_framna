import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CreateProjectForm from "./createProjectForm";
import ProjectsService from "@/services/projects";
import { SuccessI } from "@/types/api";
import { CreateProjectI } from "@/types/project";
import { useAlertStore } from "@/hooks/useAlertStore";

jest.mock("@/services/projects", () => ({
  __esModule: true,
  default: {
    createProject: jest.fn(),
  },
}));

jest.mock("@/hooks/useAlertStore", () => ({
  useAlertStore: jest.fn(),
}));

const mockedProjectsService = jest.mocked(ProjectsService);

describe("Create Project form", () => {
  const mockHandleClose = jest.fn();
  const mockUpdateAlert = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useAlertStore as jest.Mock).mockImplementation((selector) =>
      selector({ updateAlert: mockUpdateAlert })
    );
  });

  it("with valid values submit request and show alert with successfull message", async () => {
    const successfullMessage: SuccessI = {
      message: "Project Created",
      status: 200,
    };

    const body: CreateProjectI = {
      title: "Mocked title",
      description: "Mocked description",
      images: [],
      userId: 2,
    };

    mockedProjectsService.createProject.mockResolvedValueOnce({});

    render(<CreateProjectForm handleClose={mockHandleClose} />);

    const titleInput = screen.getByLabelText(/Title/i);
    fireEvent.change(titleInput, { target: { value: body.title } });

    const descriptionInput = screen.getByLabelText(/Description/i);
    fireEvent.change(descriptionInput, {
      target: { value: body.description },
    });

    fireEvent.click(screen.getByRole("button", { name: /Submit/i }));

    await waitFor(() => {
      expect(ProjectsService.createProject).toHaveBeenCalledWith(body);
      expect(mockUpdateAlert).toHaveBeenCalledWith(successfullMessage);
      expect(mockHandleClose).toHaveBeenCalled();
    });
  });
});
