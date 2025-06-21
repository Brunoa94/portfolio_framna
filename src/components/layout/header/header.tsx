"use client";

import React from "react";
import * as S from "./header.styles";
import Navbar from "../navbar/navbar";
import AdminLogin from "../../adminLogin/adminButton/adminButton";
import MobileNavbar from "../mobileNavbar/mobileNavbar";
import useBreakpoints from "@/hooks/useBreakpoints";

const Header = () => {
  const { screen } = useBreakpoints();

  return (
    <S.Header>
      <S.LogoContainer>
        <h1>Bruno Afonso</h1>
      </S.LogoContainer>
      {screen === "desktop" ? (
        <>
          <Navbar />
          <AdminLogin />
        </>
      ) : (
        <MobileNavbar />
      )}
    </S.Header>
  );
};

export default Header;
