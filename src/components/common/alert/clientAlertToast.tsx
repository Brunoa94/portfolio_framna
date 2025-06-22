"use client";
import React from "react";
import dynamic from "next/dynamic";

const AlertToast = dynamic(() => import("./alertToast"), { ssr: false });

const ClientAlertToast = () => {
  return <AlertToast />;
};

export default ClientAlertToast;
