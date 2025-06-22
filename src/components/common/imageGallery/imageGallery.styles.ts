import { CommonRow } from "@/components/globals/common";
import styled from "styled-components";

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  aspect-ratio: 4 / 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const ButtonsRow = styled(CommonRow)`
  gap: 32px;
  width: 100%;
  justify-content: center;
`;

export const GalleryButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Row = styled(CommonRow)`
  gap: 6px;
`;
