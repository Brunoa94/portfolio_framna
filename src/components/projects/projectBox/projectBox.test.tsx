import { render, screen } from "@testing-library/react";
import ProjectBox from "./projectBox";
import { Project } from "@/generated/prisma";
import { AlertStoreProvider } from "@/providers/alertStoreProvider";

describe("Project box component", () => {
  const mockProject: Project = {
    id: 1,
    title: "Test Project",
    description: "This is a test project",
    images: [],
  };

  it("renders image and images button when images exist", () => {
    const images = ["/mock-img"];

    render(
      <ProjectBox fromAdmin={false} project={{ ...mockProject, images }} />
    );

    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "/_next/image?url=%2Fmock-img&w=640&q=75"
    );
    expect(screen.getByText("Images")).toBeInTheDocument();
  });

  it("renders admin buttons when is admin", () => {
    render(
      <AlertStoreProvider>
        <ProjectBox fromAdmin={true} project={mockProject} />
      </AlertStoreProvider>
    );

    expect(screen.getByTestId("update-project-button")).toBeInTheDocument();
    expect(screen.getByTestId("delete-project-button")).toBeInTheDocument();
  });

  it("does not render admin buttons when is not admin", () => {
    render(<ProjectBox fromAdmin={false} project={mockProject} />);

    expect(screen.queryByText("Update")).not.toBeInTheDocument();
    expect(screen.queryByText("Delete")).not.toBeInTheDocument();
  });
});
