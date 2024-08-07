import Navbar from "./NavbarDash";
import React from "react";

function MainLayout({ children }) {
  return (
    <main className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-50 min-h-screen transition-all main">
      <Navbar />
      {children}
    </main>
  );
}

export default MainLayout;
