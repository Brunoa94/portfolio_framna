import StyledComponentsRegistry from "../core/registry";
import React, { FC, PropsWithChildren } from "react";
import { getServerSession } from "next-auth";
import AuthProvider from "./authProvider";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { AlertStoreProvider } from "./alertStoreProvider";

const GlobalProviders: FC<PropsWithChildren> = async ({ children }) => {
  const session = await getServerSession(authOptions);

  return (
    <StyledComponentsRegistry>
      <AuthProvider session={session}>
        <AlertStoreProvider>{children}</AlertStoreProvider>
      </AuthProvider>
    </StyledComponentsRegistry>
  );
};

export default GlobalProviders;
