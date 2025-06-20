"use client";

import { useAlertStore } from "@/hooks/useAlertStore";
import React, { useEffect, useState } from "react";
import * as S from "./alertModal.styles";
import { ItemTitle } from "@/components/globals/fonts";
import { Check, CircleAlert } from "lucide-react";

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

  return (
    <S.AlertContainer $isActive={isActive}>
      <S.Row>
        {storeAlert.status === 200 ? (
          <Check size={32} color="#03c447" strokeWidth={2.25} />
        ) : (
          <CircleAlert size={32} color="#c40303" strokeWidth={2.25} />
        )}
        <ItemTitle>
          <strong>Status: </strong>
          {storeAlert.status}
        </ItemTitle>
      </S.Row>
      <ItemTitle>{storeAlert.message}</ItemTitle>
    </S.AlertContainer>
  );
};

export default AlertModal;
