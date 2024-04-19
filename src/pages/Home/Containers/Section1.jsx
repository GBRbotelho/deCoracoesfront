import React from "react";
import styles from "./Section1.module.css";

export default function Section1() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h1>FAMILIA</h1>
          <div className={styles.detalhe}></div>
        </div>
        <div className={styles.text}>
          <p>Eternizando momentos com a mesa posta</p>
        </div>
        <div className={styles.subtitle}>
          <h2>deCorações</h2>
        </div>
      </div>
    </section>
  );
}
