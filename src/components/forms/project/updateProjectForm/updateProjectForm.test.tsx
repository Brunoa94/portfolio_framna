import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import UpdateProjectForm from "./updateProjectForm";
import ProjectsService from "@/services/projects";
import { SuccessI } from "@/types/api";
import { useAlertStore } from "@/hooks/useAlertStore";
import { Project } from "@/generated/prisma";

jest.mock("@/services/projects", () => ({
  __esModule: true,
  default: {
    updateProject: jest.fn(),
  },
}));

const mockedUpdateProject = ProjectsService.updateProject as jest.Mock;

jest.mock("@/hooks/useAlertStore", () => ({
  useAlertStore: jest.fn(),
}));

describe("Update Project form", () => {
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
      message: "Project Updated",
      status: 200,
    };

    const body: Project = {
      title: "Mocked title updated",
      description: "Mocked description updated",
      images: [],
      userId: 2,
      id: 1,
    };

    const projectId = body.id;
    const updatedBody = {
      title: body.title,
      description: body.description,
      images: body.images,
    };

    mockedUpdateProject.mockResolvedValueOnce({});

    render(<UpdateProjectForm handleClose={mockHandleClose} project={body} />);

    const titleInput = screen.getByLabelText(/Title/i);
    fireEvent.change(titleInput, { target: { value: body.title } });

    const descriptionInput = screen.getByLabelText(/Description/i);
    fireEvent.change(descriptionInput, {
      target: { value: body.description },
    });

    fireEvent.click(screen.getByRole("button", { name: /Submit/i }));

    await waitFor(() => {
      expect(ProjectsService.updateProject).toHaveBeenCalledWith(
        projectId,
        updatedBody
      );
      expect(mockUpdateAlert).toHaveBeenCalledWith(successfullMessage);
      expect(mockHandleClose).toHaveBeenCalled();
    });
  });
});
