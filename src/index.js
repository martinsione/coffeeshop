import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CartProvider } from "./context/CartContext";
import "./style/index.css";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider initialValue={JSON.parse(localStorage.cart) ?? []}>
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
