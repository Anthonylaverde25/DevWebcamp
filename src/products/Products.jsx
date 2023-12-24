import { useState } from "react";
import { MainLayout } from "../layout";
import { FilterItems, FilterProducts, RenderProducts } from "./";
import styles from "./styles/products.module.css";
import { Card, Grid } from "@mui/material";

export const Products = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
    console.log(isFilterOpen);
  };

  return (
    <MainLayout>
      <header className="bg-gradient-to-b from-blue-500 to-blue-700 py-10 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">find your next conference</h1>
        <p className="text-lg font-semibold">
          Welcome to our innovative and unique platform.
        </p>
      </header>

      <Grid className={`${styles["filter__products--container"]}`} container>
        <FilterProducts toggleFilter={toggleFilter} />
      </Grid>

      <Grid className={`${styles.products__container}`}>
        {isFilterOpen && <FilterItems />}
        <RenderProducts />
      </Grid>
    </MainLayout>
  );
};
