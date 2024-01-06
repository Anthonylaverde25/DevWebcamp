import styles from "../styles/home.module.css";
import { Link } from "react-router-dom";
import { CardProduct } from "./CardProduct";
import { Button, Grid } from "@mui/material";
import { eventData } from "../../data/eventData.js";

export const Cards = () => {
  const events = eventData;

  return (
    <>
      <div className="flex flex-col items-center">
        <Grid className={styles.cards}>
          {events.map((event, index) => (
            <CardProduct key={index} event={event} />
          ))}
        </Grid>
        <Link className={`${styles.btn_seeAll}`} to={"/products"}>
          See all course
        </Link>
      </div>
    </>
  );
};
