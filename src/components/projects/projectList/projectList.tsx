import ProjectsService from "@/services/projects";
import React, { use } from "react";
import * as S from "./projectList.styles";
import ProjectBox from "../projectBox/projectBox";
import { Project } from "@/generated/prisma";

interface ProjectListI {
  fromAdmin?: boolean;
}

const ProjectList = ({ fromAdmin }: ProjectListI) => {
  const projects = use(ProjectsService.getProjects());

  return (
    <S.ProjectsList>
      {projects.map((project: Project) => (
        <ProjectBox
          key={`project-id-${project.id}`}
          project={project}
          fromAdmin={fromAdmin}
        />
      ))}
    </S.ProjectsList>
  );
};

export default ProjectList;
