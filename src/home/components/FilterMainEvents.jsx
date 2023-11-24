import React from "react";
import styles from "../styles/home.module.css";
import { Grid } from "@mui/material";
import { MainEvents } from "./MainEvents";

export const FilterMainEvents = () => {
  return (
    <Grid className={styles["filter__type-container"]}>
      <MainEvents />
    </Grid>
  );
};
