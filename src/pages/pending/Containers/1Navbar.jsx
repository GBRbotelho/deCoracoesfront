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
        <h1>Checkout</h1>
      </div>
      <div className={styles.button}>
        <button>Voltar</button>
      </div>
    </header>
  );
}
