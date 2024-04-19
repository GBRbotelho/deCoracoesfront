import React from "react";
import styles from "./Section6.module.css";

export default function Section6() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.text}>
          <p>Deixe que a deCorações faça parte dos seus melhores momentos</p>
        </div>
        <div className={styles.button}>
          <button onClick={() => scrollToSection("planos")}>
            Assinar agora
          </button>
        </div>
      </div>
    </section>
  );
}
