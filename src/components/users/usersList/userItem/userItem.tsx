"use client";

import { User } from "@/generated/prisma";
import { memo, useCallback } from "react";
import * as S from "./userItem.styles";
import { Paragraph } from "@/components/globals/fonts";
import { Trash } from "lucide-react";
import { useAlertStore } from "@/hooks/useAlertStore";
import { AlertStore } from "@/store/alertStore";
import { ErrorI } from "@/types/api";
import { UserStore, useUserStore } from "@/store/userStore";

interface Props {
  user: User;
}

const UserItem = ({ user }: Props) => {
  const updateAlert = useAlertStore((state: AlertStore) => state.updateAlert);
  const deleteUser = useUserStore((state: UserStore) => state.deleteUser);

  const handleDelete = useCallback(async () => {
    try {
      await deleteUser(user.id);
      updateAlert({ message: "User deleted", status: 200 });
    } catch (error) {
      const e = error as ErrorI;
      updateAlert({ message: e.message, status: e.status });
    }
  }, [user, updateAlert, deleteUser]);

  return (
    <S.UserItem>
      <Paragraph>{user.username}</Paragraph>
      <S.DeleteButton onClick={handleDelete}>
        <Trash color="#ff1414" />
      </S.DeleteButton>
    </S.UserItem>
  );
};

export default memo(UserItem);
