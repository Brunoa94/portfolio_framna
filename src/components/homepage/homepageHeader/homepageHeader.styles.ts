"use client";
import { device } from "@/theme/breakpoints";
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const PageTitle = styled.h1`
  font-size: 40px;
  color: rgb(71, 31, 72);

  @media ${device.tablet} {
    font-size: 60px;
  }
`;

export const PageSubTitle = styled.span`
  font-size: 34px;
  color: rgb(104, 47, 105);

  @media ${device.tablet} {
    font-size: 40px;
  }
`;
