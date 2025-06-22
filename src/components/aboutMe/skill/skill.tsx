import React from "react";
import * as S from "./skill.styles";
import { Paragraph } from "@/components/globals/fonts";

interface Props {
  name: string;
  icon: React.ReactElement;
}

const Skill = ({ name, icon }: Props) => {
  return (
    <S.Container>
      {icon}{" "}
      <Paragraph color="#40116b" $textAlign="center">
        {name}
      </Paragraph>
    </S.Container>
  );
};

export default Skill;
