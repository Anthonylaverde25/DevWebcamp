import styles from "./styles/modal.module.css";
import { RiErrorWarningFill } from "react-icons/ri";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { clearCart } from "../../../store/Cart/cartSlice";

export const ModalDelete = ({ open, closeModal }) => {
  const dispacth = useDispatch();

  const handlerClear = () => {
    dispacth(clearCart());
    closeModal();
  };
  const handlerClose = () => {
    closeModal();
  };
  return open ? (
    <>
      <div onClick={handlerClose} className={`${styles.overlay__delete}`}></div>
      <div className={`${styles.modal__delete}`}>
        <div className={`${styles["warning__mesagge-header"]}`}>
          <RiErrorWarningFill size={30} />
          <h6 className={`${styles["warning__text-header"]}`}>
            all products will be removed
          </h6>
        </div>
        <Button onClick={handlerClear} sx={{ width: "50px" }}>
          ok
        </Button>
        <Button onClick={handlerClose} sx={{ width: "50px" }}>
          cancel
        </Button>
      </div>
    </>
  ) : null;
};

/*


 <div className={`${styles.modal__delete}`}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Se eliminaran todos los productos del carrito
        </Typography>
      </div>

*/
