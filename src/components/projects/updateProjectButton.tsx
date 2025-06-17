"use client";

import FullscreenLayer from "@/components/common/fullscreenLayer/fullscreenLayer";
import CreateProjectForm from "@/components/forms/project/createProject";
import { ActionButton } from "@/components/globals/buttons";
import useOpen from "@/hooks/useOpen";
import React from "react";
import UpdateProjectForm from "../forms/project/updateProjectForm";
import { ProjectI } from "@/types/project";

interface UpdateProjectButtonI {
  project: ProjectI;
}

const UpdateProjectButton = ({ project }: UpdateProjectButtonI) => {
  const { open, close, isOpen, closeOnFullscreen } = useOpen();

  return (
    <>
      <ActionButton onClick={open} color="gray">
        Update Project
      </ActionButton>
      {isOpen && (
        <FullscreenLayer handleClose={closeOnFullscreen}>
          <UpdateProjectForm project={project} handleClose={close} />
        </FullscreenLayer>
      )}
    </>
  );
};

export default UpdateProjectButton;
