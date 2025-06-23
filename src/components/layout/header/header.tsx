"use client";

import React from "react";
import * as S from "./header.styles";
import Navbar from "../navbar/navbar";
import AdminLogin from "../../adminLogin/adminButton/adminButton";
import MobileNavbar from "../mobileNavbar/mobileNavbar";
import useBreakpoints from "@/hooks/useBreakpoints";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const { screen } = useBreakpoints();

  return (
    <S.Header>
      <Link href="/">
        <S.LogoContainer>
          <Image
            width={80}
            height={60}
            alt="Rock lee icon"
            src="/rock-lee-icon.webp"
            style={{ borderRadius: "12px" }}
          />
          <S.HeaderTitle>Bruno Afonso</S.HeaderTitle>
        </S.LogoContainer>
      </Link>
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
