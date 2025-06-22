"use client";

import FullscreenLayer from "@/components/common/fullscreenLayer/fullscreenLayer";
import { ActionButton } from "@/components/globals/buttons";
import useOpen from "@/hooks/useOpen";
import React from "react";
import { Project } from "@/generated/prisma";
import dynamic from "next/dynamic";

const UpdateProjectForm = dynamic(
  () => import("../forms/project/updateProjectForm/updateProjectForm"),
  { ssr: false }
);

interface UpdateProjectButtonI {
  project: Project;
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
