"use client";
import InputImage from "@/components/inputs/inputImage";
import InputText from "@/components/inputs/inputText";
import ProjectsService from "@/services/projects";
import { CreateProjectI } from "@/types/project";
import React, { FormEvent, useCallback, useRef } from "react";

const CreateProject = () => {
  const imagesUrlRef = useRef<string[]>([]);

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
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
      <InputText id="title" name="Title" />
      <InputText id="description" name="Description" />
      <InputImage updateForm={uploadImages} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateProject;
