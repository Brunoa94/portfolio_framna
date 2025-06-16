import React from "react";
import * as S from "./page.styles";
import {
  Paragraph,
  Section,
  SectionTitle,
  Title,
} from "@/components/globals/fonts";

export default function AboutMe() {
  return (
    <S.Container>
      <Title>About Me: Bruno Afonso</Title>
      <Section>
        <SectionTitle>First SectionTitle</SectionTitle>
        <Paragraph>First SectionTitle</Paragraph>
      </Section>
      <Section>
        <SectionTitle>First SectionTitle</SectionTitle>
        <Paragraph>First SectionTitle</Paragraph>
      </Section>
      <Section>
        <SectionTitle>First SectionTitle</SectionTitle>
        <Paragraph>First SectionTitle</Paragraph>
      </Section>
    </S.Container>
  );
}
