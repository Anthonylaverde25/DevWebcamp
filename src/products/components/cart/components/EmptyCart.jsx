import { Typography } from "@mui/material";
import styles from "../../cart/style/cart.module.css";
export const EmptyCart = () => {
  return (
    <div className={`${styles.emptyCart}`}>
      <Typography sx={{ fontWeight: "bold" }} variant="span">
        Empty Cart
      </Typography>
    </div>
  );
};
