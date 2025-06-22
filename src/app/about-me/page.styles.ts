"use client";

import { device } from "@/theme/breakpoints";
import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 1200px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  font-family: "Roboto Mono", sans-serif;
  gap: 32px;
`;

export const Introduction = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 24px;
  text-align: justify;

  @media ${device.desktop} {
    flex-direction: row;
    gap: 40px;
  }
`;

export const TextContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-justify: ;
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
