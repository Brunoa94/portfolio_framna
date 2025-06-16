import React from "react";
import * as S from "./page.styles";
import { Title } from "@/components/globals/fonts";
import ProjectBox from "@/components/projects/projectBox/projectBox";

function Projects() {
  return (
    <S.Container>
      <Title>Projects</Title>
      <S.ProjectsList>
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
      </S.ProjectsList>
    </S.Container>
  );
}

export default Projects;
