import React from "react";
import * as S from "./page.styles";
import { Paragraph, Title } from "@/components/globals/fonts";
import ProjectList from "@/components/projects/projectList/projectList";
import CreateProjectButton from "@/components/projects/createProjectButton";

export default function AdminDashboard() {
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
        <ProjectList fromAdmin />
      </S.Section>
    </S.Container>
  );
}
