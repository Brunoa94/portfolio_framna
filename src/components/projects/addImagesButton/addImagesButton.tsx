"use client";

import React, { useCallback } from "react";
import * as S from "./addImagesButton.styles";
import InputImage from "@/components/inputs/inputImage/inputImage";
import { Project } from "@/generated/prisma";
import { ProjectStore, useProjectStore } from "@/store/projectStore";

interface Props {
  project: Project;
}

const AddImagesButton = ({ project }: Props) => {
  const updateProject = useProjectStore(
    (state: ProjectStore) => state.updateProject
  );
  const addImage = useCallback(
    (imgSrc: string) => {
      const projectUpdated = {
        ...project,
        images: [...project.images, imgSrc],
      };
      console.log("PROJECT: " + JSON.stringify(projectUpdated));
      updateProject(project.id, projectUpdated);
    },
    [project, updateProject]
  );

  return (
    <S.Container>
      <InputImage inAdmin updateForm={addImage} />
    </S.Container>
  );
};

export default AddImagesButton;
