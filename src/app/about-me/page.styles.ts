"use client";

import { device } from "@/theme/breakpoints";
import styled from "styled-components";
import { MainContainer } from "../layout.styles";
import { SectionContainer } from "@/components/globals/common";

export const Container = styled(MainContainer)`
  width: 100%;
  max-width: 1200px;
  border-radius: 24px;
  align-items: center;
  font-family: var(--font-roboto), sans-serif
  gap: 32px;
`;

export const Introduction = styled(SectionContainer)`
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 24px;
  text-align: justify;
  margin-top: 32px;

  @media ${device.desktop} {
    flex-direction: row;
    gap: 40px;
  }
`;

export const TextContainer = styled.article<{ margin?: string }>`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  font-family: var(--font-nunito), sans-serif;
  margin: ${(props) => props.margin && props.margin};
`;

export const SkillsContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  flex-wrap: wrap;
  max-width: 900px;
  justify-content: center;
`;
