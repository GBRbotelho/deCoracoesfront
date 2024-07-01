import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import AllContextsProvider from "./contexts/AllContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AllContextsProvider>
        <App />
      </AllContextsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
