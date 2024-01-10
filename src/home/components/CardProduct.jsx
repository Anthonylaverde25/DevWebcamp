import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  CircularProgress,
  IconButton,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";

import styles from "./../styles/home.module.css";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/Cart/cartSlice";
import { useState } from "react";

export const CardProduct = ({ event }) => {
  const dispatch = useDispatch();
  const [isAdd, setAdd] = useState(false);
  const [open, setOpen] = useState(false);

  const {
    nombre: title,
    descripcion: description,
    speakerID,
    image,
    speaker,
    date,
    precio: price,
    tecnologia: tecnology,
  } = event;

  //import.meta.env.BASE_URL: Es una característica de Vite que te proporciona la URL base de tu aplicación. En resumen, es la dirección principal donde se encuentra tu sitio web.
  /*
  const imagePath =
    import.meta.env.BASE_URL + "assets/imagesHome/imagesIconos/" + image;*/

  const imagePath = `${
    import.meta.env.BASE_URL
  }assets/imagesCourse/${tecnology}.svg`;

  const imagePathPonente =
    import.meta.env.BASE_URL +
    `assets/imagesHome/imagesPonentes/speaker_${speakerID}.png`;

  const handlerApp = async () => {
    setAdd(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch(addItem(event));
      setAdd(false);

      setOpen(true);
    } catch (error) {
      setAdd(false);
    }
  };

  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardHeader
        avatar={
          <Avatar
            src={imagePathPonente} // Use 'src' instead of 'image'            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
          ></Avatar>
        }
        action={<IconButton aria-label="settings"></IconButton>}
        title={`${speaker}`}
        subheader={`${date}, 2023`}
      />
      <CardMedia
        className={styles.custon__image}
        // sx={{ height: 370, width: "20%" }}
        image={imagePath}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions className="flex flex-col gap-2 justify-end">
        <Button
          sx={{ border: "1px solid", width: "100%" }}
          className={`${styles.btnAdd}  `}
          onClick={handlerApp}
          disabled={isAdd}
        >
          {isAdd ? (
            <CircularProgress size={25} sx={{ color: "#f43f5e" }} />
          ) : (
            "Add to cart"
          )}
        </Button>
        <div className="flex justify-star  w-full">{price} $</div>
      </CardActions>
    </Card>
  );
};
