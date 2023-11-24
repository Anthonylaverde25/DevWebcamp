import styles from "../styles/home.module.css";
import { CardProduct } from "./CardProduct";
import { Grid } from "@mui/material";
import { eventData } from "../../data/eventData.js";

export const Cards = () => {
  const events = eventData;

  return (
    <Grid className={styles.cards}>
      {events.map((event, index) => (
        <CardProduct key={index} event={event} />
      ))}
    </Grid>
  );
};
