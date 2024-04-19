import React from "react";
import styles from "./Section2Box.module.css";
import img from "../../../assets/imgs/Home/box.webp";

export default function Section2Box() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Box de assinatura</h1>
          <p>
            A Nossa Box é mais que um simples plano de assinatura. Mensalmente,
            você recebe uma caixa surpresa repleta de produtos para sua mesa
            posta. Com kits completos e perfeitamente coordenados, você terá
            tudo o que precisa para criar mesas deslumbrantes em qualquer
            ocasião. É a maneira mais prática e eficaz de garantir mesas
            impecáveis, sem preocupações e com total comodidade.
          </p>
        </div>
        <div className={styles.image}>
          <img src={img} alt="Ilustração" />
        </div>
      </div>
    </section>
  );
}
