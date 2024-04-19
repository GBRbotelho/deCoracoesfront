import React from "react";
import styles from "./Section2.module.css";

export default function Section2() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.pedido}>
          <div className={styles.title}>
            <h1>Resumo da assinatura</h1>
          </div>
          <div className={styles.status}>
            <h1>Pendente</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
