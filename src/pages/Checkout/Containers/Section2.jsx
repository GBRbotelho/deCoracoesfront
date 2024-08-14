import React, { useEffect, useRef, useState } from "react";
import styles from "./Section2.module.css";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import Card from "./Card";
import { useForm } from "../../../utils/useForm";
import img1 from "../../../assets/imgs/Home/1.webp";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepWizard from "react-step-wizard";
import { useAuth } from "../../../contexts/AuthContext";
import Login from "../../../components/Modals/Login";
import Plus from "../../../components/Icons/Plus";
import Address from "../../../components/Modals/Address";
import { AddressFactory } from "../../../factories/AddressFactory";
import { useFlashMessage } from "../../../contexts/FlashMessageContext";

export default function Section2({ box }) {
  const wizardRef = useRef(null);
  const { user } = useAuth();
  const [modalLogin, setModalLogin] = useState(false);
  const [modalAddress, setModalAddress] = useState(false);
  const [address, setAddress] = useState([]);
  const [addressSelected, setAddressSelected] = useState(null);
  const { showMessage } = useFlashMessage();
  const [cont, setCont] = useState(0);

  const fetchAddress = async () => {
    const response = await AddressFactory.findAll({ userId: user.id });
    setAddress(response.data);
    console.log(response);
  };

  const handleNextStep = () => {
    if (wizardRef.current) {
      wizardRef.current.nextStep();
      setCont(cont + 1);
    }
  };

  const handlePreviousStep = () => {
    if (wizardRef.current) {
      setCont(cont - 1);
      wizardRef.current.previousStep();
    }
  };

  useEffect(() => {
    if (user) {
      fetchAddress();
      if (cont === 0) {
        handleNextStep();
      }
    }
  }, [user]);

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <StepWizard ref={wizardRef}>
          <div className={styles.formData}>
            <Stepper activeStep={cont} alternativeLabel>
              {[
                "Dados do cliente",
                "Dados de entrega",
                "Dados de pagamento",
              ].map((label, index) => (
                <Step key={index + 1}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <div>
              <h1>Passo 1:</h1>
              <h1>informações do cliente</h1>
            </div>

            <div className="w-full flex justify-center">
              <button onClick={() => setModalLogin(true)}>Fazer Login</button>
            </div>
          </div>

          <div className={styles.formData}>
            <Stepper activeStep={cont} alternativeLabel>
              {[
                "Dados do cliente",
                "Dados de entrega",
                "Dados de pagamento",
              ].map((label, index) => (
                <Step key={index + 1}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <div>
              <h1>Passo 2:</h1>
              <h1>Dados para entrega</h1>
            </div>
            {address &&
              address.map((item) => {
                return (
                  <div
                    className={`bg-card text-card-foreground shadow-sm w-full cursor-pointer transition-all hover:scale-105 rounded-lg border border-[#d1d1d1] hover:bg-[#d1d1d1] flex flex-row items-center bg-opacity-50 ${
                      addressSelected === item.id ? "bg-[#d1d1d1]" : ""
                    }`}
                    onClick={() => {
                      addressSelected === item.id
                        ? setAddressSelected(null)
                        : setAddressSelected(item.id);
                    }}
                  >
                    <div className="p-3 flex-1">
                      <div className="grid grid-cols-3 gap-1">
                        <div className="text-right font-medium">Endereço:</div>
                        <div className="col-span-2">
                          {item.street}, {item.number}
                        </div>
                        <div className="text-right font-medium">Cidade:</div>
                        <div className="col-span-2">
                          {item.city}-{item.state}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            <div>
              <div
                onClick={() => setModalAddress(true)}
                className="bg-card text-card-foreground shadow-sm w-full cursor-pointer transition-all hover:scale-105 hover:bg-[#d1d1d1] rounded-lg border border-[#d1d1d1]"
              >
                <div className="flex items-center justify-center p-6">
                  <Plus classname="w-8 h-8 pr-2" />
                  <p className="text-lg font-medium">Adicionar endereço</p>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end">
              <button
                onClick={() => {
                  if (addressSelected) {
                    handleNextStep();
                  }
                }}
                disabled={!addressSelected}
              >
                Proximo passo
              </button>
            </div>
          </div>

          <div className={styles.formData}>
            <Stepper activeStep={cont} alternativeLabel>
              {[
                "Dados do cliente",
                "Dados de entrega",
                "Dados de pagamento",
              ].map((label, index) => (
                <Step key={index + 1}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <div>
              <h1>Passo 3:</h1>
              <h1>Dados para pagamento</h1>
            </div>
            <div className={styles.cardMP}>
              <Card address={addressSelected} box={box} />
            </div>
            <div>
              <button onClick={handlePreviousStep}>Passo anterior</button>
            </div>
          </div>
        </StepWizard>
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
      {modalLogin && <Login setState={setModalLogin} />}
      {modalAddress && (
        <Address setState={setModalAddress} fetch={fetchAddress} />
      )}
    </section>
  );
}
