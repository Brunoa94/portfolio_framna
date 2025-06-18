import React from "react";
import * as S from "./projectsDashboard.styles";
import { Paragraph, Title } from "@/components/globals/fonts";
import CreateProjectButton from "@/components/projects/createProjectButton";
import ProjectList from "@/components/projects/projectList/projectList";

const ProjectsDashboard = () => {
  return (
    <S.Section>
      <S.Article>
        <Title>Admin Dashboard</Title>
        <Paragraph>
          Your command center for managing and showcasing your work.This
          dashboard gives you full control over the projects in your portfolio,
          allowing you to create new projects or edit existing ones. You can
          easily add or remove images, and manage user roles by assigning admin
          access when needed.
        </Paragraph>
      </S.Article>
      <S.Article>
        <S.Row>
          <Title>Projects</Title>
          <CreateProjectButton />
        </S.Row>
        <ProjectList fromAdmin />
      </S.Article>
    </S.Section>
  );
};

export default ProjectsDashboard;
