import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const [activeProfile, setActiveProfile] = useState(false);

  // Acesse o segmento da URL após "dashboard/"
  const currentSegment = pathSegments[2] ? pathSegments[2].toUpperCase() : "";

  const handleSidebarToggleClick = (e) => {
    e.preventDefault();
    const main = document.querySelector(".main");
    const sidebarOverlay = document.querySelector(".sidebar-overlay");
    const sidebarMenu = document.querySelector(".sidebar-menu");

    main.classList.toggle("active");
    sidebarOverlay.classList.toggle("hidden");
    sidebarMenu.classList.toggle("-translate-x-full");
  };

  return (
    <div className="py-2 px-6 bg-white flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
      <button
        type="button"
        className="text-lg text-gray-600 sidebar-toggle"
        onClick={handleSidebarToggleClick}
      >
        <i className="ri-menu-line"></i>
      </button>
      <ul className="flex items-center text-sm ml-4">
        <li className="hidden mr-2 lg:block">
          <Link
            to={"/dashboard"}
            className="text-gray-400 hover:text-gray-600 font-medium"
          >
            DASHBOARD
          </Link>
        </li>
        <li className="hidden text-gray-600 mr-2 font-medium lg:block">/</li>
        <li className="hidden text-gray-600 mr-2 font-medium lg:block">
          {currentSegment}
        </li>
      </ul>
      <ul className="ml-auto flex items-center">
        <li>
          <p className="text-gray-400">Olá, {user && user.name}</p>
        </li>
        <li className="dropdown ml-3">
          <button
            type="button"
            className="dropdown-toggle flex items-center"
            onClick={() => setActiveProfile(!activeProfile)}
          >
            O
            {/* <img
              alt=""
              className="w-8 h-8 rounded-full block object-cover align-middle"
            /> */}
          </button>
          <ul
            className={`dropdown-menu shadow-md shadow-black/5 z-30 absolute py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px] right-6 ${
              !activeProfile && "hidden"
            }`}
          >
            <li className="cursor-pointer">
              <a className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-emerald-500 hover:bg-gray-50">
                Perfil
              </a>
            </li>
            <Link
              to={"/"}
              className="cursor-pointer flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-emerald-500 hover:bg-gray-50"
            >
              Sair do Dashboard
            </Link>
            <li className="cursor-pointer" onClick={() => logout()}>
              <a className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-emerald-500 hover:bg-gray-50">
                Sair
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
