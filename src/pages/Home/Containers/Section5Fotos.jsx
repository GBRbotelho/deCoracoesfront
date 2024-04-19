import React from "react";
import styles from "./Section5Fotos.module.css";
import background from "../../../assets/imgs/Home/background2.webp";

export default function Section5Fotos() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Nossas coleções</h1>
        </div>
        <div className={styles.image}>
          <img src={background} alt="Background de Imagens" />
        </div>
      </div>
    </section>
  );
}
