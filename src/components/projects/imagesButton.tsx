"use client";

import React from "react";
import { ActionButton } from "../globals/buttons";
import useOpen from "@/hooks/useOpen";
import FullscreenLayer from "../common/fullscreenLayer/fullscreenLayer";
import { Project } from "@/generated/prisma";
import dynamic from "next/dynamic";

const ImageGallery = dynamic(
  () => import("../common/imageGallery/imageGallery"),
  { ssr: false }
);

interface Props {
  images: string[];
  project: Project;
  isAdmin?: boolean;
}

const ImagesButton = ({ images, project, isAdmin }: Props) => {
  const { open, isOpen, close, closeOnFullscreen } = useOpen();

  return (
    <>
      <ActionButton color="#48194f" onClick={open}>
        Images
      </ActionButton>
      {isOpen && (
        <FullscreenLayer handleClose={closeOnFullscreen}>
          <ImageGallery
            images={images}
            handleClose={close}
            project={project}
            isAdmin={isAdmin}
          />
        </FullscreenLayer>
      )}
    </>
  );
};

export default ImagesButton;
