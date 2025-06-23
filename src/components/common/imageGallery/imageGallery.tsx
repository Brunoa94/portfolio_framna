import React, { useState } from "react";
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
  isAdmin?: boolean;
}

const ImageGallery = ({ images, handleClose, project, isAdmin }: Props) => {
  const [index, setIndex] = useState<number>(0);
  const updateProject = useProjectStore(
    (state: ProjectStore) => state.updateProject
  );
  const nextEnabled = index + 1 < images.length;
  const prevEnabled = index - 1 >= 0;

  /** Memoizing these methods could be a bottleneck, considering the component re-renders every time index updates, 
  and index is a dependency of both methods, causing them to be recreated on each render. */

  const handleIndex = (increment?: boolean) => {
    if (increment && nextEnabled) {
      setIndex((prevIndex) => prevIndex + 1);
      return;
    }

    if (index - 1 >= 0) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleDelete = async () => {
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
  };

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
          data-testid="prev-button"
        >
          <ArrowLeft size={40} color="white" strokeWidth={2.25} />
        </S.GalleryButton>
        <S.ImageWrapper>
          <Image
            fill
            style={{ objectFit: "cover" }}
            src={images[index]}
            alt={`Image from gallery ${index}`}
            data-testid="image-gallery"
          />
        </S.ImageWrapper>
        <S.GalleryButton
          disabled={!nextEnabled}
          onClick={() => handleIndex(true)}
          data-testid="next-button"
        >
          <ArrowRight size={40} color="white" strokeWidth={2.25} />
        </S.GalleryButton>
      </S.ButtonsRow>
      {isAdmin && (
        <S.GalleryButton onClick={handleDelete} data-testid="delete-button">
          <Trash2 size={28} color="red" />
        </S.GalleryButton>
      )}
    </S.ImageContainer>
  );
};

export default ImageGallery;
