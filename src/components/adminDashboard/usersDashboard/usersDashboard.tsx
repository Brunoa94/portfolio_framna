import { Title } from "@/components/globals/fonts";
import React, { use } from "react";
import { Article, Row, Section } from "../common.styles";
import UsersList from "../../users/usersList/usersList";
import CreateUserButton from "@/components/users/createUserButton";
import UsersService from "@/services/users";

const UsersDashboard = () => {
  const initialUsers = use(UsersService.getUsers());

  return (
    <Section>
      <Article>
        <Row>
          <Title>Users</Title>
          <CreateUserButton />
        </Row>
        <UsersList initialUsers={initialUsers} />
      </Article>
    </Section>
  );
};

export default UsersDashboard;
