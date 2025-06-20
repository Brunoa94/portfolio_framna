import { DeleteImageI, ResponseImageI } from "@/types/api";

class ImagesService {
  static async uploadImage(file: File) {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("/api/upload-image", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();
        throw error;
      }

      const data: ResponseImageI = await response.json();

      return data;
    } catch (error) {
      throw error;
    }
  }

  static async deleteImage({ imgSrc }: DeleteImageI) {
    try {
      const response = await fetch("/api/upload-image", {
        method: "DELETE",
        body: JSON.stringify({ imgSrc }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw error;
      }

      const data: ResponseImageI = await response.json();

      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default ImagesService;
