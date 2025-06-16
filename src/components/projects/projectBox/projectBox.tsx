import React from "react";
import * as S from "./projectBox.styles";
import Image from "next/image";
import { ItemTitle, Paragraph } from "@/components/globals/fonts";

const ProjectBox = () => {
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
