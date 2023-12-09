import { useEffect, useState } from "react";
import styles from "./styles/modal.module.css";
import { FaCircleCheck } from "react-icons/fa6";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const ModalAdd = ({ open, onClose, product }) => {
  const [isClose, setClose] = useState(false);

  const handlerClose = () => {
    setClose(true);
  };

  const { nombre: name, ponente: speaker } = product;

  useEffect(() => {
    if (isClose) {
      setTimeout(() => {
        setClose(false);
        onClose && onClose();
      }, 100);
    }
  }, [isClose, onClose]);

  const handlerBasket = () => {
    window.location.href = "/products/basket";
  };

  return (
    <>
      {open ? (
        <>
          <div
            className={`${styles.modal__container} animate__animated animate__fadeIn`}
          >
            <div className={`${styles.modal}`}>
              <div
                className={`${styles.modal__header} flex items-center gap-1`}
              >
                <FaCircleCheck color="green" size={30} />
                <p>Añadido a la cesta</p>
              </div>

              <div className={`${styles.modal__body} `}>
                <div className={`${styles.body}`}>
                  <div className={`${styles.image__container} `}>
                    <img
                      src={`assets/imagesCourse/${product.tecnologia}.svg`}
                      alt=""
                    />
                  </div>

                  <div className={`${styles.bodyText}`}>
                    <Typography
                      sx={{ fontWeight: "bold", fontSize: "1.1rem" }}
                      variant="body1"
                    >
                      {name}
                    </Typography>
                    <Typography sx={{ fontSize: "1rem" }} variant="body2">
                      {speaker}
                    </Typography>
                  </div>
                </div>

                <button
                  onClick={handlerBasket}
                  className={`${styles.modalBTN}`}
                >
                  go to basket
                </button>
              </div>
            </div>
          </div>
          <div onClick={handlerClose} className={`${styles.overlay}`}></div>
        </>
      ) : (
        ""
      )}
    </>
  );
};
