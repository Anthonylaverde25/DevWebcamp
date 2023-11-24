import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Hero } from "../home";
import { About } from "../about";
import { Products } from "../products/Products";
//import { About } from "../about";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
