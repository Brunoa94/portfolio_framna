"use client";
import FullscreenLayer from "@/components/common/fullscreenLayer/fullscreenLayer";
import CreateProjectForm from "@/components/forms/project/createProjectForm";
import { ActionButton } from "@/components/globals/buttons";
import useOpen from "@/hooks/useOpen";
import React from "react";

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
