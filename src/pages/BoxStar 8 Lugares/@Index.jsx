import React from "react";
import styles from "./@Index.module.css";
import Navbar from "./Containers/1Navbar";
import Section2 from "./Containers/Section2";

export default function Index() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Section2 />
    </main>
  );
}
