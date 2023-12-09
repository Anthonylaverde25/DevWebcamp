import React, { useEffect, useState } from "react";
import { lenguages } from "../../data/productsData.js";
import styles from "./../styles/products.module.css";
import { KeyboardArrowDown, KeyboardArrowRight } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedLenguage } from "../../store/Filter/lenguageSlice.js";

export const LenguageFilter = () => {
  const dispacth = useDispatch();
  const [open, setOpen] = useState(false);

  const { Lenguage, selectedLanguage } = useSelector((state) => state.Lenguage);

  const toggleList = () => {
    setOpen(!open);
  };

  const handlerLenguage = (lenguage) => {
    dispacth(setSelectedLenguage(lenguage));
    setOpen(false);
  };

  return (
    <div className={`${styles["filter__lenguage--container"]}`}>
      <div className={`${styles.filter__lenguage}`}>
        <div className={`${styles.lenguage__label}`}>
          <label
            onClick={toggleList}
            className={`${styles.labelText} cursor-pointer`}
          >
            Lenguage {open ? <KeyboardArrowDown /> : <KeyboardArrowRight />}
          </label>
        </div>

        {open && (
          <ul className={`${styles.lenguage__list}`}>
            {lenguages.map((lenguage, index) => (
              <li
                key={index}
                className={`${styles.lenguage__item}`}
                onClick={() => handlerLenguage(lenguage)}
              >
                {lenguage}
              </li>
            ))}
          </ul>
        )}
      </div>
      <p>Selecionado: {selectedLanguage} </p>
    </div>
  );
};
