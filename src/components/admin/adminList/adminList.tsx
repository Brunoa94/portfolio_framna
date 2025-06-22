"use client";

import React, { useEffect } from "react";
import * as S from "./adminList.styles";
import { Admin } from "@/generated/prisma";
import AdminItem from "./adminItem/adminItem";
import { useAdminStore } from "@/store/adminStore";

interface Props {
  initialUsers: Admin[];
}

const AdminList = ({ initialUsers }: Props) => {
  const { admins, setAdmins } = useAdminStore();

  useEffect(() => {
    setAdmins(initialUsers);
  }, [initialUsers, setAdmins]);

  return (
    <S.AdminList>
      {admins?.map((user: Admin) => (
        <AdminItem user={user} key={`user-${user.id}`} />
      ))}
    </S.AdminList>
  );
};

export default AdminList;
