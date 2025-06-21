import React, { useCallback, useState } from "react";
import Image from "next/image";
import * as S from "./imageGallery.styles";
import { ArrowLeft, ArrowRight, Trash2 } from "lucide-react";
import { ActionButton } from "@/components/globals/buttons";
import { Project } from "@/generated/prisma";
import ImagesService from "@/services/images";
import { ErrorI } from "@/types/api";
import { ProjectStore, useProjectStore } from "@/store/projectStore";
import { MediumText } from "@/components/globals/fonts";

interface Props {
  images: string[];
  handleClose: () => void;
  project: Project;
}

const ImageGallery = ({ images, handleClose, project }: Props) => {
  const [index, setIndex] = useState<number>(0);
  const updateProject = useProjectStore(
    (state: ProjectStore) => state.updateProject
  );
  const nextEnabled = index + 1 < images.length;
  const prevEnabled = index - 1 >= 0;

  const handleIndex = (increment?: boolean) => {
    if (increment && nextEnabled) {
      setIndex((prevIndex) => prevIndex + 1);
      return;
    }

    if (index - 1 >= 0) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleDelete = useCallback(async () => {
    const imgSrc = images[index];

    try {
      const updatedBody: Project = {
        ...project,
        images: [...project.images.filter((image: string) => image !== imgSrc)],
      };

      updateProject(project.id, updatedBody);

      await ImagesService.deleteImage({ imgSrc });

      if (index - 1 >= 0) {
        setIndex((prevIndex) => prevIndex - 1);
      } else {
        handleClose();
      }
    } catch (e) {
      throw e as ErrorI;
    }
  }, [project, images, index, updateProject, handleClose]);

  return (
    <S.ImageContainer>
      <ActionButton color="black" onClick={handleClose}>
        Close
      </ActionButton>
      <S.Row>
        <MediumText>{index + 1}</MediumText>
        <MediumText>/</MediumText>
        <MediumText>{images.length}</MediumText>
      </S.Row>
      <S.ButtonsRow>
        <S.GalleryButton
          disabled={!prevEnabled}
          onClick={() => handleIndex(false)}
        >
          <ArrowLeft size={40} color="#454545" strokeWidth={2.25} />
        </S.GalleryButton>
        <S.ImageWrapper>
          <Image
            fill
            style={{ objectFit: "cover" }}
            src={images[index]}
            alt={`Image from gallery ${index}`}
          />
        </S.ImageWrapper>
        <S.GalleryButton
          disabled={!nextEnabled}
          onClick={() => handleIndex(true)}
        >
          <ArrowRight size={40} color="#454545" strokeWidth={2.25} />
        </S.GalleryButton>
      </S.ButtonsRow>
      <S.GalleryButton onClick={handleDelete}>
        <Trash2 size={28} color="red" />
      </S.GalleryButton>
    </S.ImageContainer>
  );
};

export default ImageGallery;
