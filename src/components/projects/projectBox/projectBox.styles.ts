"use client";

import { ColContainer, CommonRow, ListRow } from "@/components/globals/common";
import { device } from "@/theme/breakpoints";
import styled from "styled-components";

export const ProjectItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding-bottom: 16px;
  border-bottom: 2px solid black;
  border-radius: 8px;
  flex-direction: column;
  width: 100%;

  @media ${device.tablet} {
    flex-direction: row;
    gap: 16px;
    padding-bottom: 0;
    border: none;
    border-radius: 0;
  }
`;

export const Col = styled(ColContainer)<{ gap?: string }>`
  gap: ${(props) => (props.gap ? props.gap : "6px")};
  width: 100%;
`;

export const Row = styled(CommonRow)`
  gap: 12px;
  flex-direction: column;

  @media ${device.mobile} {
    flex-direction: row;
  }
`;

export const ProjectRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  @media ${device.tablet} {
    flex-direction: row;
    gap: 16px;
  }
`;

export const Button = styled.button`
  padding: 16px 24px;
  border-radius : 8px
  font-family: var(--font-roboto), sans-serif
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: #301934;
  color: white;
  margin-left: auto;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &: hover{
      scale: 1.1;
      transition: scale ease-in-out 0.2s;
  }
`;

export const Technologies = styled(ListRow)`
  gap: 6px;
`;

export const Technology = styled.li`
  font-family: font-family: var(--font-roboto), sans-serif
  font-size: 14px;
`;

export const ImagesRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    margin-left: auto;
    width: fit-content;
  }
`;
