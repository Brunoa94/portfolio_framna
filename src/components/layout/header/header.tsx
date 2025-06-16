import React from "react";

import * as S from "./header.styles";
import Navbar from "../navbar/navbar";
import AdminLogin from "../../adminLogin/adminLogin/adminLogin";

const Header = () => {
  return (
    <S.Header>
      <S.LogoContainer>
        <h1>Bruno Afonso</h1>
      </S.LogoContainer>
      <Navbar />
      <AdminLogin />
    </S.Header>
  );
};

export default Header;
