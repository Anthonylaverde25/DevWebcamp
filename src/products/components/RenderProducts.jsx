import styles from "./../styles/products.module.css";
import { CardProduct } from "./CardProduct";
import { products } from "../../data";

import { useSelector } from "react-redux";
import { useEffect } from "react";

export const RenderProducts = () => {
  const { selectedLanguage } = useSelector((state) => state.Lenguage);
  const { searchTerm } = useSelector((state) => state.Term);
  let filteredProducts = products;

  if (selectedLanguage && selectedLanguage !== "Todos") {
    filteredProducts = filteredProducts.filter((product) =>
      product.idiomas.includes(selectedLanguage)
    );
  }

  if (searchTerm.length >= 2) {
    filteredProducts = filteredProducts.filter((product) =>
      product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <div className={`${styles.producst__list}`}>
      {filteredProducts.map((product, index) => (
        <CardProduct key={index} product={product} />
      ))}
    </div>
  );
};
