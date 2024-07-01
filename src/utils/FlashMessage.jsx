import React from "react";
import styles from "./FlashMessage.module.css";

const FlashMessage = ({ message, type, onClose }) => {
  return (
    <div
      className={`${styles.flashMessage} ${
        type === "success" ? styles.success : styles.error
      }`}
    >
      <p>{message}</p>
      <button className={`${styles.closeButton}`} onClick={onClose}>
        <i className="ri-close-line"></i>
      </button>
    </div>
  );
};

export default FlashMessage;
