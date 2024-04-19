import React from "react";
import styles from "./Section4Funcionamento.module.css";

import img1 from "../../../assets/imgs/Home/funcionamento1.webp";
import img2 from "../../../assets/imgs/Home/funcionamento2.webp";
import img3 from "../../../assets/imgs/Home/funcionamento3.webp";

export default function Section4Funcionamento() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Como funciona </h1>
        </div>
        <div className={styles.content}>
          <div className={styles.div1}>
            <div className={styles.image}>
              <img src={img1} alt="Escolha a Box" />
            </div>
            <div className={styles.data}>
              <div className={styles.subtitle}>
                <span>01</span>
                <h2>
                  Escolha a <br /> box
                </h2>
              </div>
              <div className={styles.text}>
                <p>Escolha o plano que é perfeito para você e sua família</p>
              </div>
            </div>
          </div>
          <div className={styles.div2}>
            <div className={styles.image}>
              <img src={img2} alt="Faça o pagamento" />
            </div>
            <div className={styles.data}>
              <div className={styles.subtitle}>
                <span>02</span>
                <h2>
                  Faça o <br /> pagamento
                </h2>
              </div>
              <div className={styles.text}>
                <p>
                  Acesse nosso checkout , preencha com as informações
                  necessárias como forma de pagamento e endereço
                </p>
              </div>
            </div>
          </div>
          <div className={styles.div1}>
            <div className={styles.image}>
              <img src={img3} alt="Escolha a Box" />
            </div>
            <div className={styles.data}>
              <div className={styles.subtitle}>
                <span>03</span>
                <h2>
                  Receba em <br />
                  casa
                </h2>
              </div>
              <div className={styles.text}>
                <p>
                  Receba em casa todos os meses caixas cheias de amor e
                  oportunidade de criar momentos únicos
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.foterContainer}>
          <p>
            Prontinho, sua assinatura já está feita e no dia 20 de cada mês sua
            box será enviada. Agora é só aguardar e aproveitar toda a nossa
            experiência! E ah, o nosso plano é livre de fidelidade, tá? Você
            fica quanto tempo desejar!
          </p>
        </div>
      </div>
    </section>
  );
}
