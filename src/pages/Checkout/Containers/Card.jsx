import React from "react";
import "./Card.css";
import { initMercadoPago } from "@mercadopago/sdk-react";
import { CardPayment } from "@mercadopago/sdk-react";
import { useNavigate } from "react-router-dom";

export default function Card({ state }) {
  const navigate = useNavigate();
  initMercadoPago("APP_USR-24094649-aec9-46b7-9e5b-6f6758fc1ede");
  const initialization = {
    amount: 5,
  };

  const customization = {
    visual: {
      texts: {
        formTitle: "Assinatura com Cartão de Crédito",
      },
    },
    paymentMethods: {
      minInstallments: 1,
      maxInstallments: 1,
      types: {
        excluded: ["debit_card"],
      },
    },
  };

  const onSubmit = async (formData) => {
    const dataSend = { ...formData, dataUser: state };
    try {
      // Defina a URL para a rota de criação de assinatura em seu servidor back-end
      const url = "http://localhost:3000/mp/create-subscription";

      // Envie uma solicitação POST com os dados do formulário do cartão de crédito
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataSend), // Envie os dados do formulário como JSON
      });
      const data = await response.json();
      console.log(data);

      // Verifique se a resposta é bem-sucedida
      if (data.success === "YES") {
        if (data.status === "authorized") {
          navigate("/authorized");
          //Logica Autorizada
        }
        if (data.status === "peding") {
          //Logica Pendente
          navigate("/peding");
        }
      } else {
        navigate("/negada");
        //Logica Erro
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      // Lide com o erro, por exemplo, exibindo uma mensagem de erro ao usuário
    }
  };

  const onError = async (error) => {
    // callback chamado para todos os casos de erro do Brick
    console.log(error);
  };

  const onReady = async () => {
    /*
            Callback chamado quando o Brick estiver pronto.
            Aqui você pode ocultar loadings do seu site, por exemplo.
          */
  };

  return (
    <CardPayment
      customization={customization}
      initialization={initialization}
      onSubmit={onSubmit}
      onReady={onReady}
      onError={onError}
    />
  );
}
