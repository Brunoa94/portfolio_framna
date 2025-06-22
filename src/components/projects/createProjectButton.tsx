"use client";

import FullscreenLayer from "@/components/common/fullscreenLayer/fullscreenLayer";
import { ActionButton } from "@/components/globals/buttons";
import useOpen from "@/hooks/useOpen";
import React from "react";
import dynamic from "next/dynamic";

const CreateProjectForm = dynamic(
  () => import("../forms/project/createProjectForm/createProjectForm"),
  {
    ssr: false,
  }
);

const CreateProject = () => {
  const { open, close, isOpen, closeOnFullscreen } = useOpen();

  return (
    <>
      <ActionButton margin="0 0 0 auto" color="green" onClick={open}>
        Create Project
      </ActionButton>
      {isOpen && (
        <FullscreenLayer handleClose={closeOnFullscreen}>
          <CreateProjectForm handleClose={close} />
        </FullscreenLayer>
      )}
    </>
  );
};

export default CreateProject;
