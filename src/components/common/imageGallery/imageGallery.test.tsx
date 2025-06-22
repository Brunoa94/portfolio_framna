import { Project } from "@/generated/prisma";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import ImageGallery from "./imageGallery";
import ImagesService from "@/services/images";
import { useProjectStore } from "@/store/projectStore";

jest.mock("@/services/images", () => ({
  __esModule: true,
  default: {
    deleteImage: jest.fn(),
  },
}));

jest.mock("@/store/projectStore", () => ({
  useProjectStore: jest.fn(),
}));

describe("Testing Images gallery", () => {
  const mockProject: Project = {
    id: 1,
    images: ["/mock1.jpg", "/mock2.jpg", "/mock3.jpg"],
    title: "Mock Project",
    description: "Mock description",
  };

  const mockUpdateProject = jest.fn();
  const mockHandleClose = jest.fn();

  it("show the first image when rendered", () => {
    render(
      <ImageGallery
        images={mockProject.images}
        handleClose={mockHandleClose}
        project={mockProject}
      />
    );

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByTestId("image-gallery")).toHaveAttribute(
      "src",
      "/_next/image?url=%2Fmock1.jpg&w=3840&q=75"
    );
  });

  it("changes image clicking prev and next buttons", () => {
    render(
      <ImageGallery
        images={mockProject.images}
        handleClose={mockHandleClose}
        project={mockProject}
      />
    );

    expect(screen.getByTestId("image-gallery")).toHaveAttribute(
      "src",
      "/_next/image?url=%2Fmock1.jpg&w=3840&q=75"
    );

    const nextBtn = screen.getByTestId("next-button");
    const prevBtn = screen.getByTestId("prev-button");

    fireEvent.click(nextBtn);

    expect(screen.getByTestId("image-gallery")).toHaveAttribute(
      "src",
      "/_next/image?url=%2Fmock2.jpg&w=3840&q=75"
    );

    fireEvent.click(prevBtn);

    expect(screen.getByTestId("image-gallery")).toHaveAttribute(
      "src",
      "/_next/image?url=%2Fmock1.jpg&w=3840&q=75"
    );
  });

  it("delete image from project and from cloudflare r2", async () => {
    (useProjectStore as unknown as jest.Mock).mockImplementation((selector) =>
      selector({ updateProject: mockUpdateProject })
    );

    const deleteImageMock = ImagesService.deleteImage as jest.Mock;
    deleteImageMock.mockResolvedValue({});

    render(
      <ImageGallery
        images={mockProject.images}
        handleClose={mockHandleClose}
        project={mockProject}
      />
    );

    const deleteBtn = screen.getByTestId("delete-button");
    fireEvent.click(deleteBtn);

    await waitFor(() => {
      expect(mockUpdateProject).toHaveBeenCalledWith(
        mockProject.id,
        expect.objectContaining({
          images: ["/mock2.jpg", "/mock3.jpg"],
        })
      );
      expect(deleteImageMock).toHaveBeenCalledWith({ imgSrc: "/mock1.jpg" });
    });
  });
});
