"use client";

import React, { useCallback } from "react";
import { ActionButton } from "../globals/buttons";
import { ErrorI } from "@/types/api";
import { useAlertStore } from "@/hooks/useAlertStore";
import { AlertStore } from "@/store/alertStore";
import { Project } from "@/generated/prisma";
import { ProjectStore, useProjectStore } from "@/store/projectStore";

interface Props {
  project: Project;
}

const DeleteProjectButton = ({ project }: Props) => {
  const updateAlert = useAlertStore((state: AlertStore) => state.updateAlert);
  const deleteProject = useProjectStore(
    (state: ProjectStore) => state.deleteProject
  );

  const handleDelete = useCallback(async () => {
    try {
      await deleteProject(project.id);
      updateAlert({ message: "Project Deleted", status: 200 });
    } catch (error) {
      const e = error as ErrorI;
      updateAlert({ message: e.message, status: e.status });
    }
  }, [project.id, updateAlert, deleteProject]);

  return (
    <ActionButton color="red" onClick={handleDelete}>
      Delete
    </ActionButton>
  );
};

export default DeleteProjectButton;
