"use client";

import React, { useEffect } from "react";
import * as S from "./projectList.styles";
import ProjectBox from "../projectBox/projectBox";
import { Project } from "@/generated/prisma";
import { useProjectStore } from "@/store/projectStore";

interface ProjectListI {
  fromAdmin?: boolean;
  initialProjects: Project[];
}

const ProjectList = ({ fromAdmin, initialProjects }: ProjectListI) => {
  const { setProjects, projects } = useProjectStore();

  useEffect(() => {
    setProjects(initialProjects);
  }, [initialProjects, setProjects]);

  return (
    <S.ProjectsList>
      {projects?.map((project: Project) => (
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
