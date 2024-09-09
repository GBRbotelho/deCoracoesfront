import React, { useEffect } from "react";
import { FlashMessageProvider } from "./FlashMessageContext";
import { LoadingProvider } from "./LoadingContext";
import { AuthProvider } from "./AuthContext";
import popup from "../assets/imgs/Home/popup.webp";
import gift from "../assets/imgs/Home/gift.webp";
import styles from "../pages/Home/@Index.module.css";

import Modal from "react-modal";
import zIndex from "@mui/material/styles/zIndex";

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
    zIndex: "100000000",
  },
};

Modal.setAppElement("#root");

const AllContextsProvider = ({ children }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 2000);
  }, []);

  return (
    <AuthProvider>
      <LoadingProvider>
        <FlashMessageProvider>
          {children}
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
        </FlashMessageProvider>
      </LoadingProvider>
    </AuthProvider>
  );
};

export default AllContextsProvider;
