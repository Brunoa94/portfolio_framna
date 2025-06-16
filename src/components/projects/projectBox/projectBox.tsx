import React from "react";
import * as S from "./projectBox.styles";
import Image from "next/image";
import { ItemTitle, Paragraph } from "@/components/globals/fonts";
import { ActionButton } from "@/components/globals/buttons";

interface ProjectBoxI {
  fromAdmin?: boolean;
}

const ProjectBox = ({ fromAdmin }: ProjectBoxI) => {
  if (fromAdmin) {
    return (
      <S.ProjectItem>
        <S.Col gap="12px">
          <S.Row>
            <Image
              width={80}
              height={80}
              alt="Project image"
              src="/purple_watercolour_background_corners.jpg"
              style={{ borderRadius: "8px" }}
            />
            <S.Col>
              <ItemTitle>Project Title</ItemTitle>
              <Paragraph>This was the description of the project</Paragraph>
              <S.Technologies>
                <S.Technology>React</S.Technology>
                <S.Technology>Vue</S.Technology>
                <S.Technology>Astro</S.Technology>
              </S.Technologies>
            </S.Col>
            <S.Button>Images</S.Button>
          </S.Row>
          <S.Row>
            <ActionButton color="gray">Update</ActionButton>
            <ActionButton color="red">Delete</ActionButton>
          </S.Row>
        </S.Col>
      </S.ProjectItem>
    );
  }

  return (
    <S.ProjectItem>
      <Image
        width={80}
        height={80}
        alt="Project image"
        src="/purple_watercolour_background_corners.jpg"
        style={{ borderRadius: "8px" }}
      />
      <S.Col>
        <ItemTitle>Project Title</ItemTitle>
        <Paragraph>This was the description of the project</Paragraph>
        <S.Technologies>
          <S.Technology>React</S.Technology>
          <S.Technology>Vue</S.Technology>
          <S.Technology>Astro</S.Technology>
        </S.Technologies>
      </S.Col>
      <S.Button>Images</S.Button>
    </S.ProjectItem>
  );
};

export default ProjectBox;
