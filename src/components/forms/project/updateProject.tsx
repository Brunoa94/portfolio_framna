import InputImage from "@/components/inputs/inputImage/inputImage";
import InputText from "@/components/inputs/inputText";
import ProjectsService from "@/services/projects";
import { CreateProjectI, ProjectI, UpdateProjectI } from "@/types/project";
import React, { FormEvent, useCallback, useRef, useState } from "react";

interface UpdateProjectFormI {
  project: ProjectI;
}

const UpdateProjectForm = ({ project }: UpdateProjectFormI) => {
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

      return response;
    } catch (e) {
      throw new Error("Something went wrong");
    }
  }, []);

  const uploadImages = useCallback((newImage: string) => {
    imagesUrlRef.current = [...imagesUrlRef.current, newImage];
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <InputText id="title" value={project.title} />
      <InputText id="description" value={project.description} />
      <InputImage images={project.images} updateForm={uploadImages} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UpdateProjectForm;
