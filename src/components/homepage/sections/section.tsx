import React from "react";
import * as S from "./section.styles";
import { CircleArrowOutUpRight } from "lucide-react";
import Link from "next/link";

interface Props {
  link: string;
  name: string;
}

const Section = ({ link, name }: Props) => {
  return (
    <Link href={link}>
      <S.Section>
        <CircleArrowOutUpRight size={54} color="#5d1d5e" />
        <S.SectionTitle>{name}</S.SectionTitle>
      </S.Section>
    </Link>
  );
};

export default Section;
