import ImagesService from "./images";
import { DeleteImageI, ResponseImageI } from "@/types/api";

global.fetch = jest.fn();
const mockedFetch = fetch as jest.Mock;

describe("Images Service", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("on Upload image", () => {
    const mockFile = new File(["mock-data"], "mock.png", {
      type: "image/png",
    });

    it("returns image data on success", async () => {
      const mockResponse: ResponseImageI = {
        image: "/uploaded/mock.png",
        status: 200,
      };

      mockedFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      });

      const result = await ImagesService.uploadImage(mockFile);

      expect(fetch).toHaveBeenCalledWith("/api/upload-image", {
        method: "POST",
        body: expect.any(FormData),
      });
      expect(result).toEqual(mockResponse);
    });

    it("throws error on failure", async () => {
      const error = new Error("Cloudflare response error");

      mockedFetch.mockRejectedValueOnce(error);

      await expect(ImagesService.uploadImage(mockFile)).rejects.toThrow(
        "Cloudflare response error"
      );
    });
  });

  describe("on Delete image", () => {
    const payload: DeleteImageI = { imgSrc: "/r2/image-to-delete.png" };

    it("returns image data on success", async () => {
      const mockResponse: ResponseImageI = {
        image: "mock-image",
        status: 200,
      };

      mockedFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      });

      const response = await ImagesService.deleteImage(payload);

      expect(fetch).toHaveBeenCalledWith(
        "/api/upload-image",
        expect.any(Object)
      );
      expect(response).toEqual(mockResponse);
    });

    it("throws error on failure", async () => {
      const error = new Error("Cloudflare response error");

      mockedFetch.mockRejectedValueOnce(error);

      await expect(ImagesService.deleteImage(payload)).rejects.toThrow(
        "Cloudflare response error"
      );
    });
  });
});
