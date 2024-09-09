import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import AllContextsProvider from "./contexts/AllContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AllContextsProvider>
        <ToastContainer />
        <App />
      </AllContextsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
