import { FilterList } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import styles from "../styles/products.module.css";
import { useState } from "react";

export const FilterProducts = ({ toggleFilter }) => {
  return (
    <Grid className={`${styles.filter__product}`}>
      <Button onClick={toggleFilter} className={`${styles.button__filter}`}>
        <FilterList />
        <Typography variant="p">Filter</Typography>
      </Button>

      <Box className={`${styles.orderBy__product}`}>
        <select className={`${styles.select__order}`} name="" id="">
          <option value="">dsdsdsdsds</option>
        </select>
      </Box>
    </Grid>
  );
};
