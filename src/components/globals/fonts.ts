"use client";

import styled from "styled-components";

export const Title = styled.h1<{ hasmargin?: string }>`
  font-family: "Roboto Mono", sans-serif;
  font-weight: bold;
  margin: ${(props) => props.hasmargin};
`;

export const Section = styled.section`
  font-family: "Roboto Mono", sans-serif;
  font-size: 16px;
  gap: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionTitle = styled.h2`
  font-family: "Roboto Mono", sans-serif;
  font-weight: bold;
`;

export const ItemTitle = styled.h3`
  font-family: "Roboto Mono", sans-serif;
  font-weight: bold;
`;

export const Paragraph = styled.p`
  font-size: 16px;
`;

export const SmallText = styled.span`
  font-size: 14px;
`;
