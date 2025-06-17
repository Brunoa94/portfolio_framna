import { SubmitButton } from "@/components/globals/buttons";
import InputImage from "@/components/inputs/inputImage/inputImage";
import InputText from "@/components/inputs/inputText";
import ProjectsService from "@/services/projects";
import { ProjectI, UpdateProjectI } from "@/types/project";
import React, { FormEvent, useCallback, useRef, useState } from "react";
import { Form } from "../forms.styles";

interface UpdateProjectFormI {
  project: ProjectI;
  handleClose: () => void;
}

const UpdateProjectForm = ({ project, handleClose }: UpdateProjectFormI) => {
  const imagesUrlRef = useRef<string[]>(project.images);

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const title = String(form.get("title")) || "";
    const description = String(form.get("description")) || "";
    const technologies: string[] =
      (form.getAll("technologies") as string[]) || [];
    const images = imagesUrlRef.current || [];

    const updateProject: UpdateProjectI = {
      title,
      description,
      technologies,
      images,
      userId: 2,
    };

    try {
      const response = await ProjectsService.updateProject(1, updateProject);
      handleClose();
      return response;
    } catch (e) {
      throw new Error("Something went wrong");
    }
  }, []);

  const uploadImages = useCallback((newImage: string) => {
    imagesUrlRef.current = [...imagesUrlRef.current, newImage];
  }, []);

  return (
    <Form onSubmit={handleSubmit}>
      <InputText name="Title" id="title" value={project.title} />
      <InputText
        name="Description"
        id="description"
        value={project.description}
      />
      <InputImage images={project.images} updateForm={uploadImages} />
      <SubmitButton type="submit">Submit</SubmitButton>
    </Form>
  );
};

export default UpdateProjectForm;
