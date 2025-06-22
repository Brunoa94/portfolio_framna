import React from "react";
import * as S from "./rocklee.styles";
import Image from "next/image";

const Rocklee = () => {
  return (
    <S.Container>
      <Image src="/rocklee.webp" width={280} height={250} alt="Rock Lee" />
      <S.Caption>
        Rock lee is a Naruto character that represents the hard and consistent
        work, the self belief when the odds are against, and the superation.
      </S.Caption>
    </S.Container>
  );
};

export default Rocklee;
