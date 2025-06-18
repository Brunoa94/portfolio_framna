"use client";

import { User } from "@/generated/prisma";
import UsersService from "@/services/users";
import { useCallback } from "react";
import * as S from "./userItem.styles";
import { Paragraph } from "@/components/globals/fonts";
import { Trash } from "lucide-react";

interface Props {
  user: User;
}

const UserItem = ({ user }: Props) => {
  const handleDelete = useCallback(async () => {
    try {
      const response = await UsersService.deleteUser(user.id);
      return response;
    } catch {}
  }, [user]);

  return (
    <S.UserItem>
      <Paragraph>{user.username}</Paragraph>
      <S.DeleteButton onClick={handleDelete}>
        <Trash color="#ff1414" />
      </S.DeleteButton>
    </S.UserItem>
  );
};

export default UserItem;
