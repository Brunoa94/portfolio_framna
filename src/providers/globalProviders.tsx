import StyledComponentsRegistry from "@/lib/registry";
import React, { FC, PropsWithChildren } from "react";
import { getServerSession } from "next-auth";
import AuthProvider from "./authProvider";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const GlobalProviders: FC<PropsWithChildren> = async ({ children }) => {
  const session = await getServerSession(authOptions);

  return (
    <StyledComponentsRegistry>
      <AuthProvider session={session}>{children}</AuthProvider>
    </StyledComponentsRegistry>
  );
};

export default GlobalProviders;
