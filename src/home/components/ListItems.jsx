import React from "react";
import styles from "../styles/home.module.css";

export const ListItems = ({ key, event }) => {
  return (
    <>
      <li className={styles.items} key={key}>
        <a href="#">{event}</a>
      </li>
    </>
  );
};
