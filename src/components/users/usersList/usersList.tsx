import UsersService from "@/services/users";
import React, { use } from "react";
import * as S from "./usersList.styles";
import { User } from "@/generated/prisma";
import UserItem from "./userItem/userItem";

const UsersList = () => {
  const users = use(UsersService.getUsers());

  if ("error" in users) {
    return <div>Error: {users.error}</div>;
  }

  return (
    <S.UsersList>
      {users?.map((user: User) => (
        <UserItem user={user} key={`user-${user.id}`} />
      ))}
    </S.UsersList>
  );
};

export default UsersList;
