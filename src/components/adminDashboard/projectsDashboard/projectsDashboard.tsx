import React, { use } from "react";
import * as S from "./projectsDashboard.styles";
import { ArticleTitle, Paragraph } from "@/components/globals/fonts";
import CreateProjectButton from "@/components/projects/createProjectButton";
import ProjectList from "@/components/projects/projectList/projectList";
import ProjectsService from "@/services/projects";

const ProjectsDashboard = () => {
  const projects = use(ProjectsService.getProjects());

  return (
    <S.Section>
      <S.Article>
        <ArticleTitle>Admin Dashboard</ArticleTitle>
        <Paragraph>
          This dashboard gives you full control over the projects in your
          portfolio, allowing you to create new projects or edit existing ones.
          You can easily add or remove images, and manage user roles by
          assigning admin access when needed.
        </Paragraph>
      </S.Article>
      <S.Article>
        <S.Row>
          <ArticleTitle>Projects</ArticleTitle>
          <CreateProjectButton />
        </S.Row>
        <ProjectList fromAdmin initialProjects={projects} />
      </S.Article>
    </S.Section>
  );
};

export default ProjectsDashboard;
