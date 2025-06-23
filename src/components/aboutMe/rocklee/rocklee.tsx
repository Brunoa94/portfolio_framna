import React from "react";
import * as S from "./rocklee.styles";
import Image from "next/image";

const Rocklee = () => {
  return (
    <S.Container>
      <Image src="/rocklee.webp" width={280} height={250} alt="Rock Lee" />
      <S.Caption>
        Rock Lee is a Naruto character that represents hard and consistent work,
        self-belief when the odds are against you, and the ability to overcome
        limits. Beyond just being a fictional character, Rock Lee deeply marked
        my childhood and shaped my way of thinking, instilling in me a belief in
        discipline, perseverance, and growth through effort.
      </S.Caption>
    </S.Container>
  );
};

export default Rocklee;
