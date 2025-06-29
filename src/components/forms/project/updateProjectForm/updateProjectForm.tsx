import { SubmitButton } from "@/components/globals/buttons";
import InputImage from "@/components/inputs/inputImage/inputImage";
import InputText from "@/components/inputs/inputText";
import React from "react";
import { Form } from "../../forms.styles";
import { Project } from "@/generated/prisma";
import InputTextArea from "@/components/inputs/inputTextArea";
import useUpdateForm from "@/hooks/useUpdateForm";
import { ProjectStore, useProjectStore } from "@/store/projectStore";

interface UpdateProjectFormI {
  project: Project;
  handleClose: () => void;
}

const UpdateProjectForm = ({ project, handleClose }: UpdateProjectFormI) => {
  const isLoading = useProjectStore((state: ProjectStore) => state.isLoading);
  const { handleUpdate, uploadImages } = useUpdateForm({
    project,
    handleClose,
  });

  return (
    <Form onSubmit={handleUpdate}>
      <InputText name="Title" id="title" value={project.title} />
      <InputTextArea
        name="Description"
        id="description"
        value={project.description}
      />
      <InputImage images={project.images} updateForm={uploadImages} />
      <SubmitButton type="submit">
        {isLoading ? "Updating..." : "Submit"}
      </SubmitButton>
    </Form>
  );
};

export default UpdateProjectForm;
