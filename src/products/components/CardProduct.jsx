import styles from "./../styles/products.module.css";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

import React, { useState } from "react";
import { Button, CircularProgress, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../store/Cart/cartSlice";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { ModalAdd } from "./modals/ModalAdd";

export const CardProduct = ({ product }) => {
  const dispacth = useDispatch();

  //const [loading, setLoading] = useState(false);
  const [isAdd, setAdd] = useState(false);
  const [isFav, setFav] = useState(false);
  const [open, setOpen] = useState(false);

  const handlerApp = async () => {
    setAdd(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispacth(addItem(product));
      setAdd(false);

      setOpen(true);
    } catch (error) {
      setAdd(false);
    }
  };

  const handlerClose = () => {
    setOpen(false);
  };

  const handlerFav = () => {
    setFav(true);

    if (isFav) setFav(false);
  };

  const {
    id,
    nombre: name,
    descripcion: description,
    ponente: speaker,
    precio: price,
    tecnologia: tecnology,
    pais: country,

    loQueAprenderas: skills,
  } = product;

  const imagePath = `${
    import.meta.env.BASE_URL
  }assets/imagesCourse/${tecnology}.svg`;

  return (
    <>
      {<ModalAdd open={open} onClose={handlerClose} product={product} />}

      <div className={`${styles.Tooltip}`}>
        <div
          className={`w-full ${styles.card}   overflow-hidden shadow-lg bg-white flex flex-col md:flex-row`}
        >
          <div className={`${styles.card__images}px-6 py-4`}>
            <div className={`${styles["card__container-image"]}`}>
              <img
                className="w-full"
                src={imagePath}
                alt="Imagen del producto"
              />
            </div>
          </div>

          <div className={`${styles.card__description} px-6 py-4`}>
            <div className=" text-xl my-2">
              <Typography className={`${styles.name__title}`} variant="p">
                {name}
              </Typography>
              <Typography
                className={`${styles.speaker__title}`}
                style={{ paddingLeft: "2rem", marginTop: "10px" }}
                variant="body2"
              >
                {speaker}
              </Typography>
            </div>

            <div className={`${styles.description__container}`}>
              <Typography className={`${styles.description} text-base py-3`}>
                {description}
              </Typography>
            </div>
            <div className=" font-bold">{price}$</div>
          </div>
        </div>
        {/*realizando el toolpit */}
        <div className={`${styles.tooltipText}`}>
          <Typography
            sx={{
              padding: "0.5rem",
              fontWeight: "bold",
            }}
            variant="p"
          >
            {name}
          </Typography>
          <div className={`${styles.tooltipText__info}`}>
            <ul className={`${styles.tooltipList}`}>
              {skills.map((skill) => (
                <li className={`${styles.tooltipItem}`}>
                  <IoCheckmarkDoneOutline size={25} />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlerApp}
              className={`${styles.btnAdd} bg-secondary`}
              disabled={isAdd}
            >
              {isAdd ? (
                <CircularProgress sx={{ color: "white" }} />
              ) : (
                "Add to cart"
              )}
            </button>
            <div onClick={handlerFav} className={`${styles.favorite}`}>
              {isFav ? <Favorite /> : <FavoriteBorder size={30} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

/*  

<FavoriteBorder size={30} />


import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
<CircularProgress />
Add to cart

import FavoriteIcon from '@mui/icons-material/Favorite';

<div id="tooltip-animation" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    <div
      className={`w-full ${styles.card}   overflow-hidden shadow-lg bg-white flex flex-col md:flex-row`}
    >
      <div className={`${styles.card__images}px-6 py-4`}>
        <div className={`${styles["card__container-image"]}`}>
          <img className="w-full" src={imagePath} alt="Imagen del producto" />
        </div>
      </div>

      <div className={`${styles.card__description} px-6 py-4`}>
        <div className=" text-xl my-2">
          <Typography className={`${styles.name__title}`} variant="p">
            {name}
          </Typography>
          <Typography
            className={`${styles.speaker__title}`}
            style={{ paddingLeft: "2rem", marginTop: "10px" }}
            variant="body2"
          >
            {speaker}
          </Typography>
        </div>

        <div className={`${styles.description__container}`}>
          <Typography className={`${styles.description} text-base py-3`}>
            {description}
          </Typography>
        </div>
        <div className=" font-bold">{price}$</div>

        <Button
          sx={{ border: "1px solid", width: "100px", marginTop: "5px" }}
          onClick={handlerAdd}
        >
          add
        </Button>
      </div>
    </div>
    <div class="tooltip-arrow" data-popper-arrow></div>
</div>
*/

/*




<div
      className={`w-full ${styles.card}   overflow-hidden shadow-lg bg-white flex flex-col md:flex-row`}
    >
      <div className={`${styles.card__images}px-6 py-4`}>
        <div className={`${styles["card__container-image"]}`}>
          <img className="w-full" src={imagePath} alt="Imagen del producto" />
        </div>
      </div>

      <div className={`${styles.card__description} px-6 py-4`}>
        <div className=" text-xl my-2">
          <Typography className={`${styles.name__title}`} variant="p">
            {name}
          </Typography>
          <Typography
            className={`${styles.speaker__title}`}
            style={{ paddingLeft: "2rem", marginTop: "10px" }}
            variant="body2"
          >
            {speaker}
          </Typography>
        </div>

        <div className={`${styles.description__container}`}>
          <Typography className={`${styles.description} text-base py-3`}>
            {description}
          </Typography>
        </div>
        <div className=" font-bold">{price}$</div>

        <Button
          sx={{ border: "1px solid", width: "100px", marginTop: "5px" }}
          onClick={handlerAdd}
        >
          add
        </Button>
      </div>
    </div>






*/
