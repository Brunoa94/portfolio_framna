import { ArticleTitle } from "@/components/globals/fonts";
import React, { use } from "react";
import { Article, Row } from "../common.styles";
import * as S from "./adminsDashboard.styles";
import AdminList from "@/components/admin/adminList/adminList";
import AdminsService from "@/services/admins";
import CreateAdminButton from "@/components/admin/createAdminButton";

const UsersDashboard = () => {
  const initialUsers = use(AdminsService.getAdmins());

  return (
    <S.Container>
      <Article>
        <Row>
          <ArticleTitle>Admins</ArticleTitle>
          <CreateAdminButton />
        </Row>
        <AdminList initialUsers={initialUsers} />
      </Article>
    </S.Container>
  );
};

export default UsersDashboard;
