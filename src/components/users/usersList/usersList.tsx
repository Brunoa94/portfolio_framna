"use client";

import React, { useEffect } from "react";
import * as S from "./usersList.styles";
import { User } from "@/generated/prisma";
import UserItem from "./userItem/userItem";
import { useUserStore } from "@/store/userStore";

interface Props {
  initialUsers: User[];
}

const UsersList = ({ initialUsers }: Props) => {
  const { users, setUsers } = useUserStore();

  useEffect(() => {
    setUsers(initialUsers);
  }, [initialUsers, setUsers]);

  return (
    <S.UsersList>
      {users?.map((user: User) => (
        <UserItem user={user} key={`user-${user.id}`} />
      ))}
    </S.UsersList>
  );
};

export default UsersList;
