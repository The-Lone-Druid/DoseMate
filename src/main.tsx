import "@fontsource/poppins";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./i18n/i18n";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
