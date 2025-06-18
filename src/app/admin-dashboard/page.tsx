import React from "react";
import * as S from "./page.styles";
import ProjectsDashboard from "@/components/adminDashboard/projectsDashboard/projectsDashboard";
import UsersDashboard from "@/components/adminDashboard/usersDashboard/usersDashboard";

export default function AdminDashboard() {
  return (
    <S.Container>
      <ProjectsDashboard />
      <UsersDashboard />
    </S.Container>
  );
}
