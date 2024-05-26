import React, { useState } from "react";
import styles from "./Section2.module.css";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import Card from "./Card";
import img1 from "../../../assets/imgs/Home/1.webp";

export default function Section2() {
  const [cont, setCont] = useState(1);
  const [error, setError] = useState(null);
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
    complemento: "",
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleCont = () => {
    // Check if all fields are filled
    const allFieldsFilled = Object.values(state).every(
      (value) => value.trim() !== ""
    );

    if (allFieldsFilled) {
      setCont(2);
      setError(null);
    } else {
      setError("Por favor, preencha todos os campos.");

      // Clear error message after 2 seconds
      setTimeout(() => {
        setError(null);
      }, 2000);
    }
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
              <div className={styles.line}>
                <div className={styles.inputLabel}>
                  <label htmlFor="">Nome</label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="nome"
                    value={state.nome}
                  />
                </div>
                <div className={styles.inputLabel}>
                  <label htmlFor="">Sobrenome</label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="sobrenome"
                    value={state.sobrenome}
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
              <div className={styles.line}>
                <div className={styles.inputLabel}>
                  <label htmlFor="">CPF do assinante:</label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="cpf"
                    value={state.cpf}
                  />
                </div>
                <div className={styles.inputLabel}></div>
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
              <div className={styles.inputLabel}>
                <label htmlFor="">Complemento</label>
                <input
                  onChange={handleInputChange}
                  type="text"
                  name="complemento"
                  value={state.complemento}
                />
              </div>
              {error && <p className={styles.error}>{error}</p>}
            </form>
            <div>
              <button onClick={handleCont}>Proximo passo</button>
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
              <p>Box Star</p>
              <p>8 Lugares</p>
            </div>
          </div>
          <div className={styles.price}>
            <div className={styles.dataPrice}>
              <p>Subtotal:</p>
              <p>99,90</p>
            </div>
            <div className={styles.dataPrice}>
              <p>
                <strong>Total:</strong>
              </p>
              <p>
                <strong>99,90</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
