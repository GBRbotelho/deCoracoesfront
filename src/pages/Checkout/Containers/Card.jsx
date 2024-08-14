import React, { useEffect } from "react";
import "./Card.css";
import { initMercadoPago, CardPayment } from "@mercadopago/sdk-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

export default function Card({ address, box }) {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    initMercadoPago("APP_USR-2288d17f-56db-4bfb-9a37-996543d0eb51");
  }, []);

  const initialization = {
    amount: box.amount,
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
    const dataSend = {
      ...formData,
      user: user.id,
      address,
      tokenPlan: box.id,
    };

    try {
      // Defina a URL para a rota de criação de assinatura em seu servidor back-end
      const url = `http://localhost:3000/mp/create-subscription`;

      // Envie uma solicitação POST com os dados do formulário do cartão de crédito
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataSend), // Envie os dados do formulário como JSON
      });

      const data = await response.json();

      // Verifique se a resposta é bem-sucedida
      if (data.success === true) {
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
    console.log("Errour");
    console.log(error);
  };

  const onReady = async () => {
    /*
            Callback chamado quando o Brick estiver pronto.
            Aqui você pode ocultar loadings do seu site, por exemplo.
          */
  };

  return (
    <>
      <CardPayment
        customization={customization}
        initialization={initialization}
        onSubmit={onSubmit}
        onReady={onReady}
        onError={onError}
      />
    </>
  );
}
