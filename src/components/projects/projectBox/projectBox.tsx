import React, { memo } from "react";
import * as S from "./projectBox.styles";
import Image from "next/image";
import { ItemTitle, MediumText, Paragraph } from "@/components/globals/fonts";
import { ImageOff } from "lucide-react";
import UpdateProjectButton from "../updateProjectButton";
import DeleteProjectButton from "../deleteProjectButton";
import { Project } from "@/generated/prisma";
import ImagesButton from "../imagesButton";

interface ProjectBoxI {
  fromAdmin?: boolean;
  project: Project;
}

const ProjectBox = ({ fromAdmin, project }: ProjectBoxI) => {
  const ProjectDetails = (
    <>
      {project?.images?.length > 0 ? (
        <Image
          width={80}
          height={80}
          alt="Project image"
          src={project?.images[0]}
          style={{ borderRadius: "8px" }}
        />
      ) : (
        <ImageOff size={80} color="darkgray" />
      )}
      <S.Col>
        <ItemTitle>{project?.title}</ItemTitle>
        <Paragraph>{project?.description}</Paragraph>
      </S.Col>
      {project.images.length > 0 ? (
        <ImagesButton images={project.images} project={project} />
      ) : (
        <MediumText $hasColor="black">No Images</MediumText>
      )}
    </>
  );

  if (fromAdmin) {
    return (
      <S.ProjectItem>
        <S.Col gap="12px">
          <S.Row>{ProjectDetails}</S.Row>
          <S.Row>
            <UpdateProjectButton project={project} />
            <DeleteProjectButton project={project} />
          </S.Row>
        </S.Col>
      </S.ProjectItem>
    );
  }

  return <S.ProjectItem>{ProjectDetails}</S.ProjectItem>;
};

export default memo(ProjectBox);
