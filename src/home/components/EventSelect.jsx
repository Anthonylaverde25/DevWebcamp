import { Grid } from "@mui/material";
import styles from "../styles/home.module.css";

export const EventSelect = ({ events }) => {
  return (
    <Grid className={styles.event__select}>
      <select className={styles.select}>
        <option value="">-- Seleciona una Categoria --</option>
        {events.map((event, index) => (
          <option key={index} value={event}>
            {event}
          </option>
        ))}
      </select>
    </Grid>
  );
};
