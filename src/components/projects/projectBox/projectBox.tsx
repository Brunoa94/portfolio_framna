import React from "react";
import * as S from "./projectBox.styles";
import Image from "next/image";
import { ItemTitle, Paragraph } from "@/components/globals/fonts";
import { ActionButton } from "@/components/globals/buttons";
import { ProjectI } from "@/types/project";
import { ImageOff } from "lucide-react";

interface ProjectBoxI {
  fromAdmin?: boolean;
  project: ProjectI;
}

const ProjectBox = ({ fromAdmin, project }: ProjectBoxI) => {
  const ProjectDetails = (
    <>
      {project.images.length > 0 ? (
        <Image
          width={80}
          height={80}
          alt="Project image"
          src={project.images[0]}
          style={{ borderRadius: "8px" }}
        />
      ) : (
        <ImageOff size={80} color="darkgray" />
      )}
      <S.Col>
        <ItemTitle>{project.title}</ItemTitle>
        <Paragraph>{project.description}</Paragraph>
        <S.Technologies>
          <S.Technology>React</S.Technology>
          <S.Technology>Vue</S.Technology>
          <S.Technology>Astro</S.Technology>
        </S.Technologies>
      </S.Col>
      <S.Button>Images</S.Button>
    </>
  );

  if (fromAdmin) {
    return (
      <S.ProjectItem>
        <S.Col gap="12px">
          <S.Row>{ProjectDetails}</S.Row>
          <S.Row>
            <ActionButton color="gray">Update</ActionButton>
            <ActionButton color="red">Delete</ActionButton>
          </S.Row>
        </S.Col>
      </S.ProjectItem>
    );
  }

  return <S.ProjectItem>{ProjectDetails}</S.ProjectItem>;
};

export default ProjectBox;
