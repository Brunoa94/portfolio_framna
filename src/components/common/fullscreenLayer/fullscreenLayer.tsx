import React, { FC, PropsWithChildren } from "react";
import * as S from "./fullscreenLayer.styles";

const FullscreenLayer: FC<PropsWithChildren> = ({ children }) => {
  return <S.FullscreenLayer>{children}</S.FullscreenLayer>;
};

export default FullscreenLayer;
