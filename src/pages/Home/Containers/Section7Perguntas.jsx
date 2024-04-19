import React, { useEffect, useState } from "react";
import styles from "./Section7Perguntas.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Plus from "../../../components/Home/Plus";
import { Link } from "react-router-dom";

import img1 from "../../../assets/imgs/Home/1.webp";
import img2 from "../../../assets/imgs/Home/2.webp";
import Ok from "../../../components/Home/Ok";

import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

export default function Section7Perguntas() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  initMercadoPago("TEST-c86cc155-2835-41e5-a1ae-e7aadb7aaf3f");

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Adiciona um ouvinte de evento para redimensionamento da janela
    window.addEventListener("resize", handleWindowResize);
  }, []);

  return (
    <section className={styles.section} id="planos">
      <h1 className={styles.title}>Planos</h1>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.perguntas}>
            <h1>Perguntas frequentes</h1>
            <ul>
              <li>
                <p>Preciso renovar o plano todo mês?</p>
                <Plus />
              </li>
              <li>
                <p>Assinei e agora?</p>
                <Plus />
              </li>
              <li>
                <p>Quanto tempo dura o plano?</p>
                <Plus />
              </li>
              <li>
                <p>Quando recebo minha box?</p>
                <Plus />
              </li>
              <li>
                <p>E se eu quiser cancelar?</p>
                <Plus />
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.ebook}>
          <div className={styles.cards}>
            <Swiper
              modules={[Autoplay]}
              spaceBetween="10%"
              slidesPerView={
                (windowWidth > 1000 && 1) ||
                (windowWidth > 0 && windowWidth <= 1000 && 1)
              }
              pagination={{ clickable: true }}
              loop={true}
            >
              <SwiperSlide className={styles.swiperCard}>
                <div className={styles.card}>
                  <div className={styles.dataCard}>
                    <div className={styles.iconBook}>
                      <div className={styles.titleCard}>
                        <h1>Box Star</h1>
                      </div>
                      <img src={img1} alt="Imagem" />
                    </div>
                    <ul>
                      <li>
                        <Ok />2 Lugares
                      </li>
                      <li>
                        <Ok />
                        porta-guardanapos
                      </li>
                      <li>
                        <Ok />
                        lugar americano
                      </li>
                      <li>
                        <Ok />
                        guardanapos personalizados
                      </li>
                    </ul>
                    <div className={styles.preco}>
                      {/* <p>
                        De <del>699,99</del>
                      </p> */}
                      <p>
                        Por <span>R$ 45,90</span>
                      </p>
                    </div>
                  </div>
                  <Link to={"/checkout/boxstar2"}>
                    <button>Escolha essa box</button>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.swiperCard}>
                <div className={styles.card}>
                  <div className={styles.dataCard}>
                    <div className={styles.iconBook}>
                      <div className={styles.titleCard}>
                        <h1>Box Premium</h1>
                      </div>
                      <img src={img2} alt="Imagem" />
                    </div>
                    <ul>
                      <li>
                        <Ok />4 Lugares
                      </li>
                      <li>
                        <Ok />
                        porta-guardanapos
                      </li>
                      <li>
                        <Ok />
                        lugar americano
                      </li>
                      <li>
                        <Ok />
                        guardanapos personalizados
                      </li>
                    </ul>
                    <div className={styles.preco}>
                      {/* <p>
                        De <del>699,99</del>
                      </p> */}
                      <p>
                        Por <span>R$ 179,90</span>
                      </p>
                    </div>
                  </div>
                  <Link to={"/checkout/boxpremium4"}>
                    <button>Escolha essa box</button>
                  </Link>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
