import React from "react";
import styles from "./Section6.module.css";

export default function Section6() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.text}>
          <p>Deixe que a deCorações faça parte dos seus melhores momentos</p>
        </div>
        <div className={styles.button}>
          <a
            href="https://api.whatsapp.com/send?phone=5519994463927&text=Ol%C3%A1,%20tenho%20duvidas%20referente%20a%20Box."
            target="_blank"
          >
            <button>Assinar agora</button>
          </a>
        </div>
      </div>
    </section>
  );
}
