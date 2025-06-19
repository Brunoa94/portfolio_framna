"use client";

import { SubmitButton } from "@/components/globals/buttons";
import InputImage from "@/components/inputs/inputImage/inputImage";
import InputText from "@/components/inputs/inputText";
import ProjectsService from "@/services/projects";
import { CreateProjectI } from "@/types/project";
import React, { FormEvent, useCallback, useRef } from "react";
import { Title } from "@/components/globals/fonts";
import { Form } from "../forms.styles";
import { AlertStore } from "@/store/alertStore";
import { useAlertStore } from "@/hooks/useAlertStore";
import { ErrorI } from "@/types/api";
import InputTextArea from "@/components/inputs/inputTextArea";
interface Props {
  handleClose: () => void;
}

const CreateProjectForm = ({ handleClose }: Props) => {
  const imagesUrlRef = useRef<string[]>([]);
  const updateAlert = useAlertStore((state: AlertStore) => state.updateAlert);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = new FormData(e.currentTarget);

      const title = String(form.get("title")) || "";
      const description = String(form.get("description")) || "";
      const images = imagesUrlRef.current || [];

      const createProject: CreateProjectI = {
        title,
        description,
        images,
        userId: 2,
      };

      try {
        await ProjectsService.createProject(createProject);
        updateAlert({ message: "Project Created", status: 200 });
        handleClose();
      } catch (error) {
        const e = error as ErrorI;
        updateAlert({ message: e.message, status: e.status });
        handleClose();
      }
    },
    [handleClose, updateAlert]
  );

  const uploadImages = useCallback((newImage: string) => {
    imagesUrlRef.current = [...imagesUrlRef.current, newImage];
  }, []);

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Create Project</Title>
      <InputText id="title" name="Title" />
      <InputTextArea id="description" name="Description" />
      <InputImage updateForm={uploadImages} />
      <SubmitButton type="submit">Submit</SubmitButton>
    </Form>
  );
};

export default CreateProjectForm;
