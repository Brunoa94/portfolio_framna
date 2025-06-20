"use client";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import { Project } from "@/generated/prisma";
import * as S from "./page.styles";

export default function Home() {
  const { data: session } = useSession();
  const [projects, setProjects] = useState<Project[]>([]);

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

  return <S.Container></S.Container>;
}
