import { Title } from "@/components/globals/fonts";
import React from "react";
import { Article, Row, Section } from "../common.styles";
import UsersList from "../../users/usersList/usersList";
import CreateUserButton from "@/components/users/createUserButton";

const UsersDashboard = () => {
  return (
    <Section>
      <Article>
        <Row>
          <Title>Users</Title>
          <CreateUserButton />
        </Row>
        <UsersList />
      </Article>
    </Section>
  );
};

export default UsersDashboard;
