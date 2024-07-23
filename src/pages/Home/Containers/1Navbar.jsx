import React, { useState } from "react";
import styles from "./1Navbar.module.css";
import Hamburger from "../../../components/Navbar/Hamburger";
import Close from "../../../components/Navbar/Close";
import { Link } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Navbar({ setModalLogin }) {
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { token, logout, user } = useAuth();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setDropdownOpen(false); // Fechar o dropdown após clicar em um item
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>deCorações</h1>
      </div>
      <nav className={styles.nav}>
        <ul>
          <Link to={"/"}>
            <li>home</li>
          </Link>
          {/* <li>kit avulsos</li> */}
          <li onClick={() => scrollToSection("planos")}>planos</li>
        </ul>
      </nav>
      <div
        className={styles.button}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {!token ? (
          <button
            className="flex items-center gap-2"
            onClick={() => setModalLogin(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 fill-primary-foreground"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            Entrar
          </button>
        ) : (
          <div className="">
            <button className="flex gap-2 items-center">
              {user.name}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15l5-5m0 0l-5-5m5 5H3"
                />
              </svg>
            </button>
            <div
              className={`absolute transform transition-all duration-300 ${
                isHovered
                  ? "opacity-100 -translate-x-full"
                  : "opacity-0 translate-x-0"
              } left-full top-[120%] bg-white rounded-lg`}
            >
              <ul className="m-2">
                {user.level > 0 && (
                  <li
                    className="cursor-pointer px-10 hover:bg-slate-200"
                    onClick={() => navigate("/dashboard")}
                  >
                    Dashboard
                  </li>
                )}
                <li className="cursor-pointer px-10 hover:bg-slate-200">
                  Pedidos
                </li>
                <li className="cursor-pointer px-10 hover:bg-slate-200">
                  Configurações
                </li>
                <li
                  className="cursor-pointer px-10 hover:bg-slate-200 flex gap-2 items-center"
                  onClick={logout}
                >
                  Sair
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1="21" x2="9" y1="12" y2="12" />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      <nav className={styles.navMobile}>
        <button
          onClick={() => setDropdownOpen(!isDropdownOpen)}
          className={styles.hamburger}
        >
          {!isDropdownOpen ? <Hamburger /> : <Close />}
        </button>
        <div
          className={`${styles.divMenu} ${
            isDropdownOpen ? styles.active : null
          }`}
        >
          <ul>
            <Link to={"/"}>
              <li>home</li>
            </Link>
            {/* <li>kit avulsos</li> */}
            <li onClick={() => scrollToSection("planos")}>planos</li>
          </ul>
          {/* <button>Consulta</button> */}
        </div>
      </nav>
    </header>
  );
}
