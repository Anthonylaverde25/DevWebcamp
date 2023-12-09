import { Button } from "@mui/material";
import styles from "./../styles/about.module.css";
import { PiSticker } from "react-icons/pi";
import { PiStarThin } from "react-icons/pi";
import { FaCheck } from "react-icons/fa6";

export const CardPrice = ({ plans }) => {
  const { nombre: name, description, price, benefits } = plans;
  console.log(name);
  return (
    <>
      <div
        className={`${styles.card} flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white`}
      >
        <div className={`${styles.card__header}`}>
          {plans.nombre === "Expert Duo Annual" ? (
            <PiStarThin color="#f97316" size={35} />
          ) : (
            <PiSticker color="#9561e2" size={35} />
          )}
          <h3 className="text-2xl font-semibold">{name}</h3>
        </div>
        <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          {description}
        </p>
        <div className="flex justify-center items-baseline my-8">
          <span className="mr-2 text-5xl font-extrabold">$ {price} </span>
          <span className="text-gray-500 dark:text-gray-400 text-secondary">
            /month
          </span>
        </div>

        <ul role="list" className="mb-8 space-y-4 text-left">
          {benefits.map((benefit) => (
            <li className="flex items-center space-x-3 ">
              <FaCheck color="#16a34a" size={20} />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
        <Button
          sx={{
            width: "100%",
            padding: "1rem",
            backgroundColor: "#15803d",
            color: "#fff",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#16a34a",
            },
          }}
        >
          Subscribe {name}{" "}
        </Button>
      </div>
    </>
  );
};

/*
<PiStarThin color="#f97316" size={35} />
<PiSticker color="#9561e2" size={35} />


*/
