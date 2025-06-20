"use client";

import styled from "styled-components";

export const Title = styled.h1<{ $hasmargin?: string }>`
  font-family: "Roboto Mono", sans-serif;
  font-weight: bold;
  margin: ${(props) => props.$hasmargin};
`;

export const Section = styled.span`
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

export const ItemTitle = styled.h3<{ color?: string }>`
  font-family: "Roboto Mono", sans-serif;
  font-weight: bold;
  color: ${(props) => props.color && props.color};
`;

export const Paragraph = styled.p`
  font-size: 16px;
`;

export const SmallText = styled.span`
  font-size: 14px;
`;

export const MediumText = styled.span`
  font-size: 18px;
  color: white;
`;
