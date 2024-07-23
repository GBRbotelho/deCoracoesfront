import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import MainLayout from "./MainLayout";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function DashboardLayout({ children }) {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  return (
    <>
      <Sidebar />
      <MainLayout>{children}</MainLayout>
    </>
  );
}

export default DashboardLayout;
