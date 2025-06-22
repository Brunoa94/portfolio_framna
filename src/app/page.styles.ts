"use client";
import { ColContainer, SectionContainer } from "@/components/globals/common";
import styled from "styled-components";

export const Container = styled(ColContainer)`
  max-width: 1200px;
  height: 100vh;
  max-height: 600px;
  padding: 32px 16px;
`;

export const Sections = styled(SectionContainer)`
  gap: 12px;
  width: 100%;
  align-items: flex-start;
  margin-top: auto;
`;
