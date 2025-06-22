import { UpdateProjectI } from "@/types/project";
import { FormEvent, useCallback, useRef } from "react";
import { useAlertStore } from "./useAlertStore";
import { AlertStore } from "@/store/alertStore";
import { Project } from "@/generated/prisma";
import { ProjectStore, useProjectStore } from "@/store/projectStore";
import { ErrorI } from "@/types/api";

interface Props {
  project: Project;
  handleClose: () => void;
}

export default function useUpdateForm({ project, handleClose }: Props) {
  const imagesUrlRef = useRef<string[]>(project.images);
  const updateAlert = useAlertStore((state: AlertStore) => state.updateAlert);
  const updateProject = useProjectStore(
    (state: ProjectStore) => state.updateProject
  );

  const handleUpdate = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = new FormData(e.currentTarget);

      const title = String(form.get("title")) || "";
      const description = String(form.get("description")) || "";
      const images = imagesUrlRef.current || [];

      const body: UpdateProjectI = {
        title,
        description,
        images,
      };

      try {
        await updateProject(project.id, body);
        updateAlert({ message: "Project Updated", status: 200 });
        handleClose();
      } catch (error) {
        const e = error as ErrorI;
        updateAlert({ message: e.message, status: e.status });
      }
    },
    [handleClose, project, updateAlert, updateProject]
  );

  const uploadImages = useCallback((newImage: string) => {
    imagesUrlRef.current = [...imagesUrlRef.current, newImage];
  }, []);

  //   const uploadImage = useCallback(async (file: File) => {
  //     try {
  //         const imgSrc = await ImagesService.uploadImage(file);

  //         const bodyUpdated: Project = {
  //             ...project,
  //             images: [...project.images, img]
  //         }

  //         await updateProject(project.id, );
  //         updateAlert({ message: "Project Updated", status: 200 });
  //         handleClose();
  //       } catch (error) {
  //         const e = error as ErrorI;
  //         updateAlert({ message: e.message, status: e.status });
  //         handleClose();
  //       }
  //   }, []);

  return {
    handleUpdate,
    uploadImages,
  };
}
