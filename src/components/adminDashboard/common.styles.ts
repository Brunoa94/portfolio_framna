"use client";

import styled from "styled-components";
import { CommonRow, ListCol, SectionContainer } from "../globals/common";

export const Section = styled(SectionContainer)`
  width: 100%;
  max-width: 400px;
  gap: 12px;
  padding: 32px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 24px;
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

export const Row = styled(CommonRow)`
  width: 100%;
`;
