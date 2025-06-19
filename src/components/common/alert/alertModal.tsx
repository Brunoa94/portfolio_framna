"use client";
import { useAlertStore } from "@/hooks/useAlertStore";
import React, { useEffect, useState } from "react";
import * as S from "./alertModal.styles";
import { ItemTitle } from "@/components/globals/fonts";

const AlertModal = () => {
  const storeAlert = useAlertStore((state) => state.alert);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    if (storeAlert.message !== "") {
      setIsActive(true);

      setTimeout(() => {
        setIsActive(false);
      }, 4000);
    }
  }, [storeAlert]);
  console.log("MESSAGE: " + storeAlert.message);
  return (
    <S.AlertContainer isactive={isActive}>
      <ItemTitle color="white">
        <strong>Status: </strong>
        {storeAlert.status}
      </ItemTitle>
      <ItemTitle color="white">{storeAlert.message}</ItemTitle>
    </S.AlertContainer>
  );
};

export default AlertModal;
