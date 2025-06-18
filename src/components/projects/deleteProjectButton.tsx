"use client";

import { ProjectI } from "@/types/project";
import React from "react";
import { ActionButton } from "../globals/buttons";
import ProjectsService from "@/services/projects";
import { ErrorI } from "@/types/api";

interface Props {
  project: ProjectI;
}

const DeleteProjectButton = ({ project }: Props) => {
  const handleDelete = async () => {
    try {
      const response = await ProjectsService.deleteProject(project.id);
      console.log("RESPONSE: " + JSON.stringify(response));
    } catch (e) {
      const error = e as ErrorI;
      console.log(error.error);
    }
  };

  return (
    <ActionButton color="red" onClick={handleDelete}>
      Delete
    </ActionButton>
  );
};

export default DeleteProjectButton;
