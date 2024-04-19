import React from "react";
import styles from "./Section3.module.css";
import img from "../../../assets/imgs/Home/section3.webp";

export default function Section3() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={img} alt="Ilustração Familia" />
        </div>
        <div className={styles.content}>
          <h1>Criando tradições com seus filhos</h1>
          <p>
            Acreditamos que cada refeição é uma oportunidade de celebrar a vida
            e fortalecer os laços familiares. É por isso que selecionamos
            cuidadosamente cada peça, pensando não apenas na qualidade e beleza,
            mas também na capacidade de transformar simples momentos em ocasiões
            memoráveis. Explore nossas box e descubra como pequenos detalhes
            podem transformar instantes em lembranças inesquecíveis
          </p>
          <div className={styles.button}>
            <button>eu quero</button>
          </div>
        </div>
      </div>
    </section>
  );
}
