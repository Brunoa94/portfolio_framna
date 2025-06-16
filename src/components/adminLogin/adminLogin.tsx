"use client";

import React, { useCallback, useState } from "react";
import * as S from "./adminLogin.styles";
import { FullscreenLayer } from "@/components/common/fullscreenLayer/fullscreenLayer.styles";
import LoginAdmin from "@/components/forms/user/loginAdmin";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { LogOut } from "lucide-react";

const AdminLogin = () => {
  const [toLogin, setToLogin] = useState<boolean>(false);
  const { data: session } = useSession();

  const handleSignOut = useCallback(() => {
    signOut();
  }, []);

  return (
    <>
      {session && (
        <S.Row>
          <Link href="/admin-dashboard">
            <S.LoginButton>Admin Dashboard</S.LoginButton>
          </Link>
          <S.LogoutButton onClick={handleSignOut}>
            <LogOut size={36} color="#ff0000" absoluteStrokeWidth />{" "}
          </S.LogoutButton>
        </S.Row>
      )}
      {!session && (
        <S.LoginButton
          onClick={() => {
            setToLogin(true);
          }}
        >
          Login as Admin
        </S.LoginButton>
      )}
      {toLogin && (
        <FullscreenLayer>
          <LoginAdmin handleToLogin={setToLogin} />
        </FullscreenLayer>
      )}
    </>
  );
};

export default AdminLogin;
