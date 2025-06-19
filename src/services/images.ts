import { DeleteImageI, ErrorI, ResponseImageI } from "@/types/api";

class ImagesService {
  static async uploadImage(file: File) {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch("/api/upload-image", {
        method: "POST",
        body: formData,
      });

      const data: ResponseImageI = await res.json();

      return data;
    } catch (e) {
      throw e as ErrorI;
    }
  }

  static async deleteImage({ imgSrc }: DeleteImageI) {
    try {
      const res = await fetch("/api/upload-image", {
        method: "DELETE",
        body: JSON.stringify({ imgSrc }),
      });

      const data: ResponseImageI = await res.json();

      return data;
    } catch (e) {
      throw e as ErrorI;
    }
  }
}

export default ImagesService;
