import React, { use, useCallback } from "react";
import * as S from "./page.styles";
import { Paragraph, Title } from "@/components/globals/fonts";
import ProjectBox from "@/components/projects/projectBox/projectBox";
import CreateProjectButton from "@/components/projects/createProjectButton/createProjectButton";
import ProjectsService from "@/services/projects";
import { ProjectI } from "@/types/project";

export default function AdminDashboard() {
  const projects = use(ProjectsService.getProjects());

  return (
    <S.Container>
      <S.Section>
        <Title>Admin Dashboard</Title>
        <Paragraph>
          Your command center for managing and showcasing your work.This
          dashboard gives you full control over the projects in your portfolio,
          allowing you to create new projects or edit existing ones. You can
          easily add or remove images, and manage user roles by assigning admin
          access when needed.
        </Paragraph>
      </S.Section>
      <S.Section>
        <S.Row>
          <Title>Projects</Title>
          <CreateProjectButton />
        </S.Row>
        <S.List>
          {projects.map((project: ProjectI) => (
            <ProjectBox
              key={`project-id-${project.id}`}
              project={project}
              fromAdmin
            />
          ))}
        </S.List>
      </S.Section>
    </S.Container>
  );
}
