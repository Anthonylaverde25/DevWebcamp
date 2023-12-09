import styles from "./../styles/products.module.css";
import { CardProduct } from "./CardProduct";
import { products } from "../../data";

import { useSelector } from "react-redux";

export const RenderProducts = () => {
  const { selectedLanguage } = useSelector((state) => state.Lenguage);

  const filteredProducts =
    selectedLanguage !== "Todos"
      ? products.filter((product) => product.idiomas.includes(selectedLanguage))
      : products;

  return (
    <div className={`${styles.producst__list}`}>
      {filteredProducts.map((product, index) => (
        <CardProduct key={index} product={product} />
      ))}
    </div>
  );
};
