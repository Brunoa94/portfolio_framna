"use client";
import CreateProject from "@/components/forms/project/createProject";
import UpdateProjectForm from "@/components/forms/project/updateProject";
import CreateUser from "@/components/forms/user/createUser";
import InputImage from "@/components/inputs/inputImage";
import ProjectsService from "@/services/projects";
import UsersService from "@/services/users";
import { ProjectI } from "@/types/project";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  height: 300px;
  background-color: red;
`;

export default function Home() {
  const { data: session } = useSession();
  const [projects, setProjects] = useState<ProjectI[]>([]);

  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     try {
  //       const response: ProjectI[] = await ProjectsService.getProjects();
  //       setProjects(response);
  //       console.log("RESPONSE: " + JSON.stringify(response[0]));
  //     } catch (e) {
  //       console.log("ERROR: " + JSON.stringify(e));
  //     }
  //   };

  //   fetchProjects();
  // }, []);

  async function doLogin() {
    await signIn("credentials", {
      username: "bruno",
      password: "nowishashed",
      redirect: false,
    });
  }

  return <></>;
}
