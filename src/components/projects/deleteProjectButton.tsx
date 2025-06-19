"use client";

import React from "react";
import { ActionButton } from "../globals/buttons";
import ProjectsService from "@/services/projects";
import { ErrorI } from "@/types/api";
import { useAlertStore } from "@/hooks/useAlertStore";
import { AlertStore } from "@/store/alertStore";
import { Project } from "@/generated/prisma";

interface Props {
  project: Project;
}

const DeleteProjectButton = ({ project }: Props) => {
  const updateAlert = useAlertStore((state: AlertStore) => state.updateAlert);

  const handleDelete = async () => {
    try {
      await ProjectsService.deleteProject(project.id);
    } catch (error) {
      const e = error as ErrorI;
      updateAlert({ message: e.message, status: e.status });
    }
  };

  return (
    <ActionButton color="red" onClick={handleDelete}>
      Delete
    </ActionButton>
  );
};

export default DeleteProjectButton;
