"use client";

import { SubmitButton } from "@/components/globals/buttons";
import InputImage from "@/components/inputs/inputImage/inputImage";
import InputText from "@/components/inputs/inputText";
import ProjectsService from "@/services/projects";
import { CreateProjectI } from "@/types/project";
import React, { FormEvent, useCallback, useRef } from "react";
import * as S from "../forms.styles";
import { Title } from "@/components/globals/fonts";

interface Props {
  handleClose: () => void;
}

const CreateProjectForm = ({ handleClose }: Props) => {
  const imagesUrlRef = useRef<string[]>([]);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = new FormData(e.currentTarget);

      const title = String(form.get("title")) || "";
      const description = String(form.get("description")) || "";
      const technologies: string[] =
        (form.getAll("technologies") as string[]) || [];
      const images = imagesUrlRef.current || [];

      const createProject: CreateProjectI = {
        title,
        description,
        technologies,
        images,
        userId: 2,
      };

      try {
        const response = await ProjectsService.createProject(createProject);
        handleClose();
        return response;
      } catch {
        throw new Error("Something went wrong");
      }
    },
    [handleClose]
  );

  const uploadImages = useCallback((newImage: string) => {
    imagesUrlRef.current = [...imagesUrlRef.current, newImage];
  }, []);

  return (
    <S.Form onSubmit={handleSubmit}>
      <Title>Create Project</Title>
      <InputText id="title" name="Title" />
      <InputText id="description" name="Description" />
      <InputImage updateForm={uploadImages} />
      <SubmitButton type="submit">Submit</SubmitButton>
    </S.Form>
  );
};

export default CreateProjectForm;
