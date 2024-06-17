import React, { useState } from "react";
import styles from "./Section2.module.css";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import Card from "./Card";
import { useForm } from "../../../utils/useForm";
import img1 from "../../../assets/imgs/Home/1.webp";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


export default function Section2({ box }) {
  const [cont, setCont] = useState(1);
  const [error, setError] = useState(null);
  const [state, setState] = useState({
    cpf: "",
    nome: "da",
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
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
            <Stepper activeStep={cont} alternativeLabel>
        {["Dados do cliente","Dados de pagamento"].map((label, index) => (
        <Step key={index + 1}>
        <StepLabel>{label}</StepLabel>
        </Step>
      ))}
      </Stepper>
            <div>
              <h1>Passo 1:</h1>
              <h1>informações do cliente</h1>
            </div>
            <form>
              <h1>Dados de contato</h1>
              <div className={styles.line}>
                <div className={styles.inputLabel}>
                  <label htmlFor="nome">Nome</label>
                  <input
                    type="text"
                    name="nome"
                    value={state.name}
                    onChange={handleInputChange}
                    onKeyDown={(e) => useForm(e, "letras")}
                  />
                </div>
                <div className={styles.inputLabel}>
                  <label htmlFor="">Sobrenome</label>
                  <input
                    type="text"
                    name="sobrenome"
                    value={state.sobrenome}
                    onChange={handleInputChange}
                    onKeyDown={(e) => useForm(e, "letras")}
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
                    maxLength={2}
                    onKeyDown={(e) => useForm(e, "numeros")}
                  />
                </div>
                <div className={styles.inputLabel}>
                  <label htmlFor="">Telefone</label>
                  <input
                    onChange={handleInputChange}
                    type="text"
                    name="telefone"
                    value={state.telefone}
                    maxLength={11}
                    onKeyDown={(e) => useForm(e, "telefone")}
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
                    maxLength={11}
                    onKeyDown={(e) => useForm(e, "cpf")}
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
            <Stepper activeStep={cont} alternativeLabel>
        {["Dados do cliente","Dados de pagamento"].map((label, index) => (
        <Step key={index + 1}>
        <StepLabel>{label}</StepLabel>
        </Step>
      ))}
      </Stepper>
            <div>
              <h1>Passo 2:</h1>
              <h1>informações do pagamento</h1>
            </div>
            <div className={styles.cardMP}>
              <Card state={state} box={box} />
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
              <p>{box.name}</p>
              <p>{box.lugares}</p>
            </div>
          </div>
          <div className={styles.price}>
            <div className={styles.dataPrice}>
              <p>Subtotal:</p>
              <p>{box.price}</p>
            </div>
            <div className={styles.dataPrice}>
              <p>
                <strong>Total:</strong>
              </p>
              <p>
                <strong>{box.price}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
