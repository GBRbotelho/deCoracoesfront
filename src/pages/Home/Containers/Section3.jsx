import React from "react";
import styles from "./Section3.module.css";
import img from "../../../assets/imgs/Home/section3.webp";

export default function Section3() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
            <a
              href="https://api.whatsapp.com/send?phone=5519994463927&text=Ol%C3%A1,%20tenho%20duvidas%20referente%20a%20Box."
              target="_blank"
            >
              <button>eu quero</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
