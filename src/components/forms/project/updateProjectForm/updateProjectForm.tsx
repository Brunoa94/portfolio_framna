import { SubmitButton } from "@/components/globals/buttons";
import InputImage from "@/components/inputs/inputImage/inputImage";
import InputText from "@/components/inputs/inputText";
import ProjectsService from "@/services/projects";
import { UpdateProjectI } from "@/types/project";
import React, { FormEvent, useCallback, useRef } from "react";
import { Form } from "../../forms.styles";
import { Project } from "@/generated/prisma";
import { ErrorI } from "@/types/api";
import { useAlertStore } from "@/hooks/useAlertStore";
import { AlertStore } from "@/store/alertStore";
import InputTextArea from "@/components/inputs/inputTextArea";

interface UpdateProjectFormI {
  project: Project;
  handleClose: () => void;
}

const UpdateProjectForm = ({ project, handleClose }: UpdateProjectFormI) => {
  const imagesUrlRef = useRef<string[]>(project.images);
  const updateAlert = useAlertStore((state: AlertStore) => state.updateAlert);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = new FormData(e.currentTarget);

      const title = String(form.get("title")) || "";
      const description = String(form.get("description")) || "";
      const images = imagesUrlRef.current || [];

      const updateProject: UpdateProjectI = {
        title,
        description,
        images,
      };

      try {
        await ProjectsService.updateProject(project.id, updateProject);

        updateAlert({ message: "Project Updated", status: 200 });
        handleClose();
        handleClose();
      } catch (error) {
        const e = error as ErrorI;
        updateAlert({ message: e.message, status: e.status });
        handleClose();
      }
    },
    [handleClose, project, updateAlert]
  );

  const uploadImages = useCallback((newImage: string) => {
    imagesUrlRef.current = [...imagesUrlRef.current, newImage];
  }, []);

  return (
    <Form onSubmit={handleSubmit}>
      <InputText name="Title" id="title" value={project.title} />
      <InputTextArea
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
