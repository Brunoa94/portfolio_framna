"use client";

import { ListCol, SectionContainer } from "@/components/globals/common";
import { device } from "@/theme/breakpoints";
import styled from "styled-components";

export const Section = styled(SectionContainer)`
  width: 100%;
  gap: 12px;
  padding: 32px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 24px;

  @media ${device.desktop} {
    max-width: 900px;
  }
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
`;

export const List = styled(ListCol)`
  gap: 32px;
  width: 100%;
  align-items: flex-start;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
