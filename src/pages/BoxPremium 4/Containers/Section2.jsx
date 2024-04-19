import React, { useState } from "react";
import styles from "./Section2.module.css";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import Card from "./Card";
import img1 from "../../../assets/imgs/Home/1.webp";

export default function Section2() {
  const [cont, setCont] = useState(1);
  const [state, setState] = useState({
    cpf: "",
    nome: "",
    sobrenome: "",
    ddd: "",
    telefone: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
    cep: "",
  });

  const obj = {
    dataUser: {
      firstName: "Gabriel",
      lastName: "Botelho",
      areaCode: "19",
      number: "996855849",
      streetName: "Rua Guara",
      streetNumber: 8,
      city: { name: "Campinas" },
      zipCode: "13053-341",
    },
    token: "4ca5c8d78a6f75f7ef170c7451f4fd8b",
    issuer_id: "24",
    payment_method_id: "master",
    transaction_amount: 5,
    installments: 1,
    payer: {
      email: "gabrielbbotelho05@gmail.com",
      identification: { type: "CPF", number: "12345678909" },
    },
  };

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        {cont === 1 && (
          <div className={styles.formData}>
            <div>
              <h1>Passo 1:</h1>
              <h1>informações do cliente</h1>
            </div>
            <form>
              <h1>Dados de contato</h1>
              <div className={styles.inputLabel}>
                <label htmlFor="">Nome</label>
                <input
                  onChange={handleInputChange}
                  type="text"
                  name="nome"
                  value={state.nome}
                />
              </div>
              <div className={styles.line}>
                <div className={styles.inputLabel}>
                  <label htmlFor="">Sobrenome</label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="sobrenome"
                    value={state.sobrenome}
                  />
                </div>
                <div className={styles.inputLabel}>
                  <label htmlFor="">CPF do assinante:</label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="cpf"
                    value={state.cpf}
                  />
                </div>
              </div>
              <div className={styles.line}>
                <div className={styles.inputLabel}>
                  <label htmlFor="">DDD</label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="ddd"
                    value={state.ddd}
                  />
                </div>
                <div className={styles.inputLabel}>
                  <label htmlFor="">Telefone</label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="telefone"
                    value={state.telefone}
                  />
                </div>
              </div>
              <h1>Dados de endereço</h1>
              <div className={styles.line}>
                <div className={styles.inputLabel}>
                  <label htmlFor="">Rua</label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="rua"
                    value={state.rua}
                  />
                </div>
                <div className={styles.inputLabel}>
                  <label htmlFor="">Bairro</label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="bairro"
                    value={state.bairro}
                  />
                </div>
              </div>
              <div className={styles.line}>
                <div className={styles.inputLabel}>
                  <label htmlFor="">Nª da Residência</label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="numero"
                    value={state.numero}
                  />
                </div>
                <div className={styles.inputLabel}>
                  <label htmlFor="">Cidade</label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="cidade"
                    value={state.cidade}
                  />
                </div>
              </div>
              <div className={styles.line}>
                <div className={styles.inputLabel}>
                  <label htmlFor="">Estado</label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="estado"
                    value={state.estado}
                  />
                </div>
                <div className={styles.inputLabel}>
                  <label htmlFor="">CEP</label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="cep"
                    value={state.cep}
                  />
                </div>
              </div>
            </form>
            <div>
              <button
                onClick={() => {
                  setCont(cont + 1);
                }}
              >
                Proximo passo
              </button>
            </div>
          </div>
        )}
        {cont === 2 && (
          <div className={styles.formData}>
            <div>
              <h1>Passo 2:</h1>
              <h1>informações do pagamento</h1>
            </div>
            <div className={styles.cardMP}>
              <Card state={state} />
            </div>
            <div>
              <button
                onClick={() => {
                  setCont(cont - 1);
                }}
              >
                Passo anterior
              </button>
            </div>
          </div>
        )}
        <div className={styles.pedido}>
          <div className={styles.title}>
            <h1>Resumo da assinatura</h1>
          </div>
          <div className={styles.box}>
            <div className={styles.image}></div>
            <div className={styles.dataBox}>
              <p>Box Premium</p>
              <p>4 Lugares</p>
            </div>
          </div>
          <div className={styles.price}>
            <div className={styles.dataPrice}>
              <p>Subtotal:</p>
              <p>179,90</p>
            </div>
            <div className={styles.dataPrice}>
              <p>Entrega:</p>
              <p>0,0</p>
            </div>
            <div className={styles.dataPrice}>
              <p>Descontos:</p>
              <p>0,0</p>
            </div>
            <div className={styles.dataPrice}>
              <p>
                <strong>Total:</strong>
              </p>
              <p>
                <strong>179,90</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
