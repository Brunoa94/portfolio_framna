"use client";
import { SectionContainer } from "@/components/globals/common";
import styled from "styled-components";
import { MainContainer } from "./layout.styles";

export const Container = styled(MainContainer)`
  max-width: 1200px;
  height: 100vh;
  max-height: 600px;
  padding: 32px 16px;
  width: 100%;
  align-items: flex-start;
`;

export const Sections = styled(SectionContainer)`
  gap: 12px;
  width: 100%;
  align-items: flex-start;
  margin-top: auto;
`;
