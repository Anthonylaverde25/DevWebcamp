import React, { useState } from "react";
import { Button } from "@mui/material";
import styles from "./../styles/products.module.css";
import { LenguageFilter } from "./LenguageFilter";

export const FilterItems = () => {
  return (
    <div
      className={`${styles["filter__items--container"]} animate__animated animate__fadeIn`}
    >
      <div className={`${styles.filter__items}`}>
        <LenguageFilter />
        <br />
        {/*         <Button sx={{ width: "100%", border: "1px solid" }}>Filtrar</Button>
         */}
      </div>
    </div>
  );
};
