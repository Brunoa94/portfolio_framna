"use client";

import ImageUploader from "@/components/imageUploader";
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
      email: "bruno.afonso94@hotmail.com",
      password: "password",
      redirect: false,
    });
  }

  return (
    <Container>
      {/* <button onClick={() => doLogin()}>Login</button>
      <button onClick={() => signOut()}>Logout</button>
      <span>User: {session?.user?.name}</span> */}
      <ImageUploader />
    </Container>
  );
}
