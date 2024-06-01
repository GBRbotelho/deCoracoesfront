import React, { useEffect, useState } from "react";
import styles from "./Section7Perguntas.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Plus from "../../../components/Home/Plus";
import { Link } from "react-router-dom";
import "./template.css";

import img1 from "../../../assets/imgs/Home/1.webp";
import img2 from "../../../assets/imgs/Home/2.webp";
import Ok from "../../../components/Home/Ok";

export default function Section7Perguntas() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [question, setQuestion] = useState(null);
  const [boxStar, setBoxStar] = useState(2);
  const [boxPremium, setBoxPremium] = useState(4);

  const boxStarArray = [
    {
      lugares: 2,
      valor: "R$ 39,90",
    },
    {
      lugares: 4,
      valor: "R$ 59,90",
    },
    {
      lugares: 6,
      valor: "R$ 79,90",
    },
    {
      lugares: 8,
      valor: "R$ 99,90",
    },
    {
      lugares: 12,
      valor: "R$ 139,90",
    },
  ];

  const boxPremiumArray = [
    {
      lugares: 4,
      valor: "R$ 119,90",
    },
    {
      lugares: 6,
      valor: "R$ 162,90",
    },
    {
      lugares: 8,
      valor: "R$ 204,90",
    },
    {
      lugares: 12,
      valor: "R$ 292,90",
    },
  ];

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Adiciona um ouvinte de evento para redimensionamento da janela
    window.addEventListener("resize", handleWindowResize);
  }, []);

  const handleClick = (number) => {
    if (question === number) {
      setQuestion(null);
    } else {
      setQuestion(number);
    }
  };

  return (
    <section className={styles.section} id="planos">
      <h1 className={styles.title}>Planos</h1>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.perguntas}>
            <h1>Perguntas frequentes</h1>
            <ul>
              <li>
                <div className={styles.questao}>
                  <p>Assinei e agora?</p>
                  <Plus click={() => handleClick(1)} />
                </div>
                <div
                  className={`${styles.resposta} ${
                    question === 1 ? styles.visivel : ""
                  } `}
                >
                  <p>
                    <strong>R: </strong>Fique de olho no seu email, você
                    receberá a confirmação da compra da assinatura e só aguardar
                    o envio
                  </p>
                </div>
              </li>
              <li>
                <div className={styles.questao}>
                  <p>Quando recebo minha box?</p>
                  <Plus click={() => handleClick(2)} />
                </div>
                <div
                  className={`${styles.resposta} ${
                    question === 2 ? styles.visivel : ""
                  } `}
                >
                  <p>
                    <strong>R: </strong>As boxes serão enviadas no dia 20 de
                    cada mês. Depois só aguardar o prazo da transportadora
                  </p>
                </div>
              </li>
              <li>
                <div className={styles.questao}>
                  <p>Qual a diferença entre as boxes?</p>
                  <Plus click={() => handleClick(3)} />
                </div>
                <div
                  className={`${styles.resposta} ${
                    question === 3 ? styles.visivel : ""
                  } `}
                >
                  <p>
                    <strong>R: </strong>As duas boxes contém a mesma roupa de
                    mesa. O que diferencia é que na Box Premium você recebe
                    também uma pequena decoração de mesa e alguns utensílios
                    como bandejas, tábuas, mantegueiras, bowls, etc.
                  </p>
                </div>
              </li>
              <li>
                <div className={styles.questao}>
                  <p>Como funciona o pagamento?</p>
                  <Plus click={() => handleClick(4)} />
                </div>
                <div
                  className={`${styles.resposta} ${
                    question === 4 ? styles.visivel : ""
                  } `}
                >
                  <p>
                    <strong>R: </strong>O pagamento é feito exclusivamente por
                    cartão de crédito. O sistema de pagamento é o recorrente,
                    isso é, não tomamos o limite do seu cartão e você não
                    precisa refazer a assinatura todo mês, o pagamento é
                    automático, o valor será cobrado no seu cartão na mesma data
                    da compra. Quando quiser cancelar, só nos avisar.
                  </p>
                </div>
              </li>
              <li>
                <div className={styles.questao}>
                  <p>Quanto tempo dura o plano?</p>
                  <Plus click={() => handleClick(5)} />
                </div>
                <div
                  className={`${styles.resposta} ${
                    question === 5 ? styles.visivel : ""
                  } `}
                >
                  <p>
                    <strong>R: </strong>A renovação é automática mas você fica
                    quanto tempo quiser, ele é livre de fidelidade, você pode
                    cancelar a qualquer momento.
                  </p>
                </div>
              </li>
              <li>
                <div className={styles.questao}>
                  <p>Posso escolher o que vai na minha box?</p>
                  <Plus click={() => handleClick(6)} />
                </div>
                <div
                  className={`${styles.resposta} ${
                    question === 6 ? styles.visivel : ""
                  } `}
                >
                  <p>
                    <strong>R: </strong>O plano de assinatura tem por ideal
                    enviar produtos surpresa, para que você realmente tenha uma
                    experiência unboxing surpreendente, como receber um presente
                    todo mês na sua casa.
                  </p>
                </div>
              </li>
              <li>
                <div className={styles.questao}>
                  <p>Preciso renovar o plano todo mês?</p>
                  <Plus click={() => handleClick(7)} />
                </div>
                <div
                  className={`${styles.resposta} ${
                    question === 7 ? styles.visivel : ""
                  } `}
                >
                  <p>
                    <strong>R: </strong>Não, o plano é renovado automaticamente.
                  </p>
                </div>
              </li>
              <li>
                <div className={styles.questao}>
                  <p>E se eu quiser cancelar?</p>
                  <Plus click={() => handleClick(8)} />
                </div>
                <div
                  className={`${styles.resposta} ${
                    question === 8 ? styles.visivel : ""
                  } `}
                >
                  <p>
                    <strong>R: </strong>A maneira mais fácil de cancelar é nos
                    avisar no whatsapp (199999999999). A confirmação e
                    cancelamento
                  </p>
                </div>
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
                        <Ok />
                        de 2 a 12 Lugares
                      </li>
                      <li>
                        <Ok />
                        porta-guardanapos
                      </li>
                      <li>
                        <Ok />
                        guardanapos personalizados
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className={styles.preco}>
                      <div>
                        <label htmlFor="">Lugares:</label>
                        <div className="box">
                          <select
                            value={boxStar}
                            onChange={(e) =>
                              setBoxStar(parseInt(e.target.value, 10))
                            }
                          >
                            {boxStarArray.map((box, index) => (
                              <option key={index} value={box.lugares}>
                                {box.lugares}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      {/* <p>
                        De <del>699,99</del>
                      </p> */}
                      <p>
                        Por{" "}
                        <span>
                          {
                            boxStarArray.find((box) => {
                              return box.lugares === boxStar;
                            }).valor
                          }
                        </span>
                      </p>
                    </div>
                    <Link
                      to={`/checkout/star${
                        boxStarArray.find((box) => {
                          return box.lugares === boxStar;
                        }).lugares
                      }`}
                    >
                      <button>Escolha essa box</button>
                    </Link>
                  </div>
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
                        <Ok />
                        de 4 a 12 Lugares
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
                      <li>
                        <Ok />
                        brinde surpresa
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className={styles.preco}>
                      <div className={styles.lugares}>
                        <label htmlFor="">Lugares:</label>
                        <div className="box">
                          <select
                            value={boxPremium}
                            onChange={(e) =>
                              setBoxPremium(parseInt(e.target.value, 10))
                            }
                          >
                            {boxPremiumArray.map((box, index) => (
                              <option key={index} value={box.lugares}>
                                {box.lugares}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      {/* <p>
                        De <del>699,99</del>
                      </p> */}
                      <p>
                        Por{" "}
                        <span>
                          {
                            boxPremiumArray.find((box) => {
                              return box.lugares === boxPremium;
                            }).valor
                          }
                        </span>
                      </p>
                    </div>
                    <Link
                      to={`/checkout/premium${
                        boxPremiumArray.find((box) => {
                          return box.lugares === boxPremium;
                        }).lugares
                      }`}
                    >
                      <button>Escolha essa box</button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
