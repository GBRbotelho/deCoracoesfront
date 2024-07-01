import React, { createContext, useContext, useState, useEffect } from "react";
import FlashMessage from "../utils/FlashMessage";

const FlashMessageContext = createContext();

export const FlashMessageProvider = ({ children }) => {
  const [flashMessage, setFlashMessage] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  const showMessage = (message, type = "success") => {
    // Limpa o temporizador existente, se houver
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    setFlashMessage({ message, type });

    // Define um novo temporizador para ocultar a mensagem após 2500ms
    const newTimeoutId = setTimeout(() => {
      setFlashMessage(null);
    }, 1000);

    // Armazena o ID do temporizador
    setTimeoutId(newTimeoutId);
  };

  const closeMessage = () => {
    // Limpa o temporizador existente, se houver
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    setFlashMessage(null);
  };

  // Limpa o temporizador ao desmontar o componente
  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  return (
    <FlashMessageContext.Provider value={showMessage}>
      {children}
      {flashMessage && (
        <FlashMessage
          message={flashMessage.message}
          type={flashMessage.type}
          onClose={closeMessage}
        />
      )}
    </FlashMessageContext.Provider>
  );
};
