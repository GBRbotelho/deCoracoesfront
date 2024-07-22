import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import MainLayout from "./MainLayout";
import { useNavigate } from "react-router-dom";

function DashboardLayout({ children }) {
  const navigate = useNavigate();

  return (
    <>
      <Sidebar />
      <MainLayout>{children}</MainLayout>
    </>
  );
}

export default DashboardLayout;
