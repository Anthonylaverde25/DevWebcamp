import React from "react";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import { Hero } from "../home";
import { About } from "../about";
import { Products } from "../products/Products";
import { Basket } from "../basket";
//import { About } from "../about";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />

      <Route path="/products/cart" element={<Products />} />
      <Route path="/products/basket" element={<Basket />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
