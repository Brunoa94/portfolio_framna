"use client";

import React, { useCallback } from "react";
import * as S from "./adminButton.styles";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { LogOut } from "lucide-react";
import LoginAdmin from "../loginAdmin/loginAdmin";

const AdminButton = () => {
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
            <LogOut size={36} color="#ff0000" absoluteStrokeWidth />
          </S.LogoutButton>
        </S.Row>
      )}
      {!session && <LoginAdmin />}
    </>
  );
};

export default AdminButton;
