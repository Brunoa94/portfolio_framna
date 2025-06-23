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
          width={220}
          height={120}
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
      <S.ImagesRow>
        {project.images.length > 0 ? (
          <ImagesButton
            images={project.images}
            project={project}
            isAdmin={fromAdmin}
          />
        ) : (
          <MediumText $hasColor="black" $hasmargin="0 0 0 auto">
            No Images
          </MediumText>
        )}
      </S.ImagesRow>
    </>
  );

  if (fromAdmin) {
    return (
      <S.ProjectItem>
        <S.Col gap="12px">
          <S.ProjectRow>{ProjectDetails}</S.ProjectRow>
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
