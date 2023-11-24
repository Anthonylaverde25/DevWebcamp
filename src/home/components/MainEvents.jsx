import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ListItems } from "./ListItems";
import styles from "../styles/home.module.css";
import { EventSelect } from "./EventSelect";

const events = [
  "Data Science and Data Analysis",
  "Programming and Software Development",
  "Cybersecurity",
  "Mobile App Development",
  "Big Data and Databases",
];

export const MainEvents = () => {
  const [windowWidth, setWindonWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handlerResize = () => {
      setWindonWidth(window.innerWidth);
    };

    window.addEventListener("resize", handlerResize);
    return () => {
      window.removeEventListener("resize", handlerResize);
    };
  });

  return (
    <Grid className="">
      {windowWidth <= 1482 ? (
        <EventSelect events={events} />
      ) : (
        <ul className={styles.list__items}>
          {events.map((event, index) => (
            <ListItems key={index} event={event} />
          ))}
          <ListItems />
        </ul>
      )}
    </Grid>
  );
};
