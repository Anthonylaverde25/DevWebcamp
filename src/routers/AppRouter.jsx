import React from "react";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import { Hero } from "../home";
import { About } from "../about";
import { Products } from "../products/Products";
import { Basket } from "../basket";
import { Contacts } from "@mui/icons-material";
import { ContactsUS } from "../contacts";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contacts" element={<ContactsUS />} />
      <Route path="/products/cart" element={<Products />} />
      <Route path="/products/basket" element={<Basket />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
