import React from "react";
import * as S from "./page.styles";
import ProjectsDashboard from "@/components/adminDashboard/projectsDashboard/projectsDashboard";
import AdminsDashboard from "@/components/adminDashboard/adminsDashboard/adminsDashboard";

export default function AdminDashboard() {
  return (
    <S.Container>
      <ProjectsDashboard />
      <AdminsDashboard />
    </S.Container>
  );
}
