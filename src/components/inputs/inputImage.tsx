import { ResponseImageI } from "@/types/api";
import React, { useState } from "react";

const InputImage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  const [images, setImages] = useState<string[]>([]);

  const handleUpload = async () => {
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

      setImages((prevImages) => [...prevImages, data.image]);

      return data;
    } catch (error) {}
  };

  return (
    <div className="p-4 border rounded max-w-md space-y-4">
      {images.map((imageString: string) => (
        <img src={imageString} style={{ width: "50px", height: "50px" }} />
      ))}
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
      <button
        onClick={handleUpload}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Upload
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default InputImage;
