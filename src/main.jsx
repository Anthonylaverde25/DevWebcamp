import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; /* aplica los estilos globales a todo los componentes que instacia en el presente archivo */
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
