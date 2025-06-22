"use client";

import React, { useCallback, useRef, useState } from "react";
import * as S from "./mobileNavbar.styles";
import { AlignJustify } from "lucide-react";
import Navbar from "../navbar/navbar";
import LoginAdmin from "@/components/adminLogin/loginAdmin/loginAdmin";
import { signOut, useSession } from "next-auth/react";
import { LoginButton } from "@/components/globals/buttons";
import useClickOutside from "@/hooks/useClickOutside";

const MobileNavbar = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  const { data: session } = useSession();
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(() => {
    setClicked(false);
  }, []);

  useClickOutside({ handleClickOutside, ref });

  const handleOpen = useCallback(() => {
    setClicked(true);
  }, []);

  const handleLogout = useCallback(() => {
    signOut();
  }, []);

  return (
    <S.Container ref={ref}>
      <S.Button onClick={handleOpen}>
        <AlignJustify size={36} color="#420f43" />
      </S.Button>
      {clicked && (
        <S.OptionsContainer>
          <Navbar isMobile isLogged={!!session} />
          {session && <LoginButton onClick={handleLogout}>Logout</LoginButton>}
          {!session && <LoginAdmin />}
        </S.OptionsContainer>
      )}
    </S.Container>
  );
};

export default MobileNavbar;
