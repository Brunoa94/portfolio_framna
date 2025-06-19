"use client";
import React from "react";
import { ActionButton } from "../globals/buttons";
import useOpen from "@/hooks/useOpen";
import ImageGallery from "../common/imageGallery/imageGallery";
import FullscreenLayer from "../common/fullscreenLayer/fullscreenLayer";
import { Project } from "@/generated/prisma";

interface Props {
  images: string[];
  project: Project;
}

const ImagesButton = ({ images, project }: Props) => {
  const { open, isOpen, close, closeOnFullscreen } = useOpen();

  return (
    <>
      <ActionButton color="#48194f" onClick={open}>
        Images
      </ActionButton>
      {isOpen && (
        <FullscreenLayer handleClose={closeOnFullscreen}>
          <ImageGallery images={images} handleClose={close} project={project} />
        </FullscreenLayer>
      )}
    </>
  );
};

export default ImagesButton;
