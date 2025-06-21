import { Title } from "@/components/globals/fonts";
import React, { use } from "react";
import { Article, Row } from "../common.styles";
import UsersList from "../../users/usersList/usersList";
import CreateUserButton from "@/components/users/createUserButton";
import UsersService from "@/services/users";
import * as S from "./usersDashboard.styles";

const UsersDashboard = () => {
  const initialUsers = use(UsersService.getUsers());

  return (
    <S.Container>
      <Article>
        <Row>
          <Title>Users</Title>
          <CreateUserButton />
        </Row>
        <UsersList initialUsers={initialUsers} />
      </Article>
    </S.Container>
  );
};

export default UsersDashboard;
