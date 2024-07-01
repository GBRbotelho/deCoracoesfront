import React, { useState, useEffect } from "react";
import styles from "./@Index.module.css";
import Navbar from "./Containers/1Navbar";
import Section1 from "./Containers/Section1";
import Section2Box from "./Containers/Section2Box";
import Section3 from "./Containers/Section3";
import Section4Funcionamento from "./Containers/Section4Funcionamento";
import Section5Fotos from "./Containers/Section5Fotos";
import Section7Perguntas from "./Containers/Section7Perguntas";
import Section6 from "./Containers/Section6";
import Login from "../../components/Modals/Login";
import popup from "../../assets/imgs/Home/popup.webp";
import gift from "../../assets/imgs/Home/gift.webp";

import Modal from "react-modal";

let subtitle;

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // cor preta com 50% de transparência
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    padding: "0",
    border: "0",
    borderRadius: "20px",
    overflow: "hidden",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    boxShadow: "rgba(236, 61, 6, 1) 4px 4px 1px",
  },
};

Modal.setAppElement("#root");

export default function Index() {
  const [modalLogin, setModalLogin] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 2000);
  }, []);

  return (
    <main id="root" className={styles.main}>
      <div className={styles.div1}>
        <Navbar setModalLogin={setModalLogin} />
        <Section1 />
      </div>
      <Section2Box />
      <Section3 />
      <Section4Funcionamento />
      <Section5Fotos />
      <Section6 />
      <Section7Perguntas />
      {modalLogin && <Login setState={setModalLogin} />}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className={styles.popup}>
          <div className={styles.pop1}>
            <img src={popup} alt="Popup" />
          </div>
          <div className={styles.pop2}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div style={{ width: "50px" }}>
                <img src={gift} alt="gift" />
              </div>
              <h1>QUER GANHAR UM KIT DE GUARDANAPOS?</h1>
              <p>CLIQUE PARA SABER MAIS</p>
            </div>
            <div className={styles.button}>
              <a
                href="https://api.whatsapp.com/send?phone=5519994463927&text=Ol%C3%A1,%20tenho%20duvidas%20referente%20a%20Box."
                target="_blank"
              >
                <button>SAIBA COMO</button>
              </a>
            </div>
          </div>
        </div>
      </Modal>
    </main>
  );
}
