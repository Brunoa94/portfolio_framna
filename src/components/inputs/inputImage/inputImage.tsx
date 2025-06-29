import { ResponseImageI } from "@/types/api";
import React, { useCallback, useState } from "react";
import * as S from "./inputImage.styles";
import Image from "next/image";
import { ImagePlus } from "lucide-react";
import ImagesService from "@/services/images";

interface InputImageI {
  images?: string[];
  updateForm: (value: string) => void;
  inAdmin?: boolean;
}

const InputImage = ({ images, updateForm, inAdmin }: InputImageI) => {
  const [imagesUploaded, setImagesUploaded] = useState<string[]>(images || []);

  const handleUpload = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e?.target?.files?.[0];

      if (!file) {
        return;
      }
      try {
        const response: ResponseImageI = await ImagesService.uploadImage(file);
        if (!inAdmin)
          setImagesUploaded((prevImages) => [...prevImages, response.image]);
        updateForm(response.image);
      } catch {}
    },
    [updateForm, inAdmin]
  );

  return (
    <S.Col>
      {!inAdmin && (
        <S.Row>
          {imagesUploaded?.map((imageString: string, index: number) => (
            <Image
              key={`id-${imageString}`}
              src={imageString}
              width={80}
              height={80}
              style={{ borderRadius: "8px" }}
              alt={`Image Uploaded ${index}`}
            />
          ))}
        </S.Row>
      )}
      <S.Label htmlFor="image-loader">
        <ImagePlus size={36} color="#590c97" />
      </S.Label>
      <S.Input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        id="image-loader"
        data-testid="image-loader"
      />
    </S.Col>
  );
};

export default InputImage;
