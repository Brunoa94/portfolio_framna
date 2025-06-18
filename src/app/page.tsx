"use client";
import { ProjectI } from "@/types/project";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
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
