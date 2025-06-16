import { ResponseImageI } from "@/types/api";
import React, { useCallback, useRef, useState } from "react";
import * as S from "./inputImage.styles";
import Image from "next/image";
import { ImagePlus } from "lucide-react";

interface InputImageI {
  images?: string[];
  updateForm: (value: string) => void;
}

const InputImage = ({ images, updateForm }: InputImageI) => {
  const [imagesUploaded, setImagesUploaded] = useState<string[]>(images || []);

  const handleUpload = useCallback(async (file: File | null) => {
    if (!file) {
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
    <S.Col>
      <S.Row>
        {imagesUploaded?.map((imageString: string) => (
          <Image
            key={`id-${imageString}`}
            src={imageString}
            width={80}
            height={80}
            style={{ borderRadius: "8px" }}
            alt="Image Uploaded"
          />
        ))}
      </S.Row>
      <S.Label htmlFor="image-loader">
        <ImagePlus size={36} color="#590c97" />
      </S.Label>
      <S.Input
        type="file"
        accept="image/*"
        onChange={(e) => handleUpload(e.target.files?.[0] || null)}
        id="image-loader"
      />
    </S.Col>
  );
};

export default InputImage;
