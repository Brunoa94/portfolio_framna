import React from "react";
import * as S from "./copyright.styles";
import { Paragraph } from "@/components/globals/fonts";
import { Copyright as CopyrightImage } from "lucide-react";

const Copyright = () => {
  return (
    <S.Container>
      <CopyrightImage size={32} color="#500075" />
      <Paragraph color="#500075">Copyright Bruno Afonso</Paragraph>
    </S.Container>
  );
};

export default Copyright;
