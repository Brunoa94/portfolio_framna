"use client";

import styled from "styled-components";
import { MainContainer } from "../layout.styles";
import { ListCol } from "@/components/globals/common";

export const Container = styled(MainContainer)`
  width: 100%;
  max-width: 900px;
  gap: 12px;
  padding: 32px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 24px;
`;

export const ProjectsList = styled(ListCol)`
  gap: 24px;
  width: 100%;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
  width: 100%;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
