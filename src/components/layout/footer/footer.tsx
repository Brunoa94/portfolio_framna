import React from "react";
import * as S from "./footer.styles";
import Copyright from "@/components/common/copyright/copyright";
import Contacts from "@/components/common/contacts/contacts";

const Footer = () => {
  return (
    <S.Footer>
      <Copyright />
      <Contacts />
    </S.Footer>
  );
};

export default Footer;
