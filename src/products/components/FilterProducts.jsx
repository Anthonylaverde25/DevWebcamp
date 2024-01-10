import { FilterList } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import styles from "../styles/products.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../store/Filter/termSlice";

export const FilterProducts = ({ toggleFilter }) => {
  const dispatch = useDispatch();

  const handlerSearch = (e) => {
    const term = e.target.value;
    dispatch(setSearchTerm(term));
  };

  return (
    <Grid className={`${styles.filter__product}`}>
      <Button onClick={toggleFilter} className={`${styles.button__filter}`}>
        <FilterList />
        <Typography variant="p">Filter</Typography>
      </Button>

      <Box className={`${styles.orderBy__product}`}>
        <input
          className={`${styles.select__order}`}
          type="text"
          placeholder="Search course..."
          //value={}
          onChange={handlerSearch}
        />
      </Box>
    </Grid>
  );
};
