import React, { useState } from "react";
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

export default function Index() {
  const [modalLogin, setModalLogin] = useState(false);

  return (
    <main className={styles.main}>
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
    </main>
  );
}
