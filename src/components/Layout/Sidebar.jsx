import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function Sidebar() {
  const { user } = useAuth();

  // Manipulador de clique para o overlay
  const handleSidebarOverlayClick = (e) => {
    e.preventDefault();
    const main = document.querySelector(".main");
    const sidebarOverlay = document.querySelector(".sidebar-overlay");
    const sidebarMenu = document.querySelector(".sidebar-menu");

    main.classList.add("active");
    sidebarOverlay.classList.add("hidden");
    sidebarMenu.classList.add("-translate-x-full");
  };

  return (
    <div>
      <div className="fixed left-0 top-0 w-64 h-full bg-red-900 p-4 z-50 sidebar-menu transition-transform">
        <div className="flex flex-col justify-between h-full">
          <div>
            <a
              href="#"
              className="flex items-center pb-4 border-b border-b-red-800"
            >
              {/* <img
                alt=""
                className="w-8 h-8 rounded object-cover"
              /> */}
              <span className="text-lg font-bold text-white ml-3">
                DeCorações
              </span>
            </a>
            <ul className="mt-4">
              <li className="mb-1 group">
                <Link
                  to="/dashboard/"
                  className="flex items-center py-2 px-4 text-red-300 hover:bg-red-950 hover:text-red-100 rounded-md group-[.active]:bg-red-800 group-[.active]:text-white group-[.selected]:bg-red-950 group-[.selected]:text-red-100"
                >
                  <i className="ri-calendar-check-line  mr-3 text-lg"></i>
                  <span className="text-sm">Inicio</span>
                </Link>
              </li>
              <li className="mb-1 group">
                <Link
                  to="/dashboard/clients"
                  className="flex items-center py-2 px-4 text-red-300 hover:bg-red-950 hover:text-red-100 rounded-md group-[.active]:bg-red-800 group-[.active]:text-white group-[.selected]:bg-red-950 group-[.selected]:text-red-100"
                >
                  <i className="ri-calendar-check-line  mr-3 text-lg"></i>
                  <span className="text-sm">Clientes</span>
                </Link>
              </li>
              <li className="mb-1 group">
                <Link
                  to="/dashboard/"
                  className="flex items-center py-2 px-4 text-red-300 hover:bg-red-950 hover:text-red-100 rounded-md group-[.active]:bg-red-800 group-[.active]:text-white group-[.selected]:bg-red-950 group-[.selected]:text-red-100"
                >
                  <i className="ri-calendar-check-line  mr-3 text-lg"></i>
                  <span className="text-sm">Assinaturas</span>
                </Link>
              </li>
            </ul>
          </div>
          {user && user.level >= 2 && (
            <div className="mb-1 group">
              <Link
                to={"/dashboard/usuarios"}
                className="flex items-center py-2 px-4 text-red-300 hover:bg-red-950 hover:text-red-100 rounded-md group-[.active]:bg-red-800 group-[.active]:text-white group-[.selected]:bg-red-950 group-[.selected]:text-red-100"
              >
                <i className="ri-settings-2-line mr-3 text-lg"></i>
                <span className="text-sm">Usuarios</span>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div
        className="fixed top-0 left-0 w-full h-full bg-black/50 z-40 md:hidden sidebar-overlay"
        onClick={handleSidebarOverlayClick}
      ></div>
    </div>
  );
}
