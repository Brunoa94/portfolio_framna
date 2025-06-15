import { ResponseImageI } from "@/types/api";
import React, { useCallback, useRef, useState } from "react";

interface InputImageI {
  images?: string[];
  updateForm: (value: string) => void;
}

const InputImage = ({ images, updateForm }: InputImageI) => {
  const [imagesUploaded, setImagesUploaded] = useState<string[]>(images || []);
  const [message, setMessage] = useState("");

  const handleUpload = useCallback(async (file: File | null) => {
    if (!file) {
      setMessage("Please select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch("/api/upload-image", {
        method: "POST",
        body: formData,
      });

      const data: ResponseImageI = await res.json();

      setImagesUploaded((prevImages) => [...prevImages, data.image]);
      updateForm(data.image);

      return data;
    } catch (error) {}
  }, []);

  return (
    <div className="p-4 border rounded max-w-md space-y-4">
      {imagesUploaded?.map((imageString: string) => (
        <img src={imageString} style={{ width: "50px", height: "50px" }} />
      ))}
      <input
        type="file"
        accept="image/*"
        onChange={(e) => handleUpload(e.target.files?.[0] || null)}
      />
      {message && <p>{message}</p>}
    </div>
  );
};

export default InputImage;
