"use client";

import CreateUser from "@/components/forms/user/createUser";
import UsersService from "@/services/users";
import { signIn, signOut, useSession } from "next-auth/react";
import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  height: 300px;
  background-color: red;
`;

export default function Home() {
  const { data: session } = useSession();

  async function doLogin() {
    await signIn("credentials", {
      username: "bruno",
      password: "nowishashed",
      redirect: false,
    });
  }

  return (
    <Container>
      <CreateUser />
    </Container>
  );
}
