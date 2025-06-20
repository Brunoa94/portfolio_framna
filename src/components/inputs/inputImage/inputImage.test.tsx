import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import InputImage from "./inputImage";
import ImagesService from "@/services/images";

jest.mock("@/services/images", () => ({
  __esModule: true,
  default: {
    uploadImage: jest.fn(),
  },
}));

const mockedUploadImage = ImagesService.uploadImage as jest.Mock;

describe("Input Image", () => {
  const mockUpdateForm = jest.fn();
  const mockedImages = ["/mocked-img-1.png", "/mocked-img-2.png"];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders with mocked images", () => {
    render(<InputImage images={mockedImages} updateForm={mockUpdateForm} />);

    const thumbnails = screen.getAllByAltText(/Image Uploaded/i);
    expect(thumbnails).toHaveLength(2);
  });

  it("uploads an image file and add it to the preview images", async () => {
    const mockResponse = { image: "/uploaded/mock2.png" };
    mockedUploadImage.mockResolvedValueOnce(mockResponse);

    render(<InputImage updateForm={mockUpdateForm} images={mockedImages} />);

    const uploadedImages = screen.getAllByAltText(/Image Uploaded/i) ?? [];

    expect(uploadedImages).toHaveLength(2);

    const file = new File(["mock-data"], "mock2.png", { type: "image/png" });
    const fileInput = screen.getByTestId(/image-loader/i);

    fireEvent.change(fileInput, { target: { files: [file] } });

    await waitFor(() => {
      expect(mockedUploadImage).toHaveBeenCalledWith(file);
      expect(mockUpdateForm).toHaveBeenCalledWith("/uploaded/mock2.png");
    });

    const uploadedImagesAfter = screen.getAllByAltText(/Image Uploaded/i) ?? [];

    expect(uploadedImagesAfter).toHaveLength(3);
  });

  it("does not upload if file is null", async () => {
    render(<InputImage updateForm={mockUpdateForm} />);

    const fileInput = screen.getByTestId(/image-loader/i);
    fireEvent.change(fileInput, { target: { files: [] } });

    await waitFor(() => {
      expect(mockedUploadImage).not.toHaveBeenCalled();
      expect(mockUpdateForm).not.toHaveBeenCalled();
    });
  });
});
