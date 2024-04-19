import React, { useState } from "react";
import styles from "./1Navbar.module.css";
import Hamburger from "../../../components/Navbar/Hamburger";
import Close from "../../../components/Navbar/Close";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

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
          <li>planos</li>
        </ul>
      </nav>
      <div className={styles.button}>
        <button>entrar</button>
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
            <li>planos</li>
          </ul>
          {/* <button>Consulta</button> */}
        </div>
      </nav>
    </header>
  );
}
