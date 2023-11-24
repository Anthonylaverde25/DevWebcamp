import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";

import styles from "./../styles/home.module.css";
export const CardProduct = ({ event }) => {
  const { title, description, speakerID, image, speaker, date } = event;

  const imagePath =
    import.meta.env.BASE_URL + "assets/imagesHome/imagesIconos/" + image;
  const imagePathPonente =
    import.meta.env.BASE_URL +
    `assets/imagesHome/imagesPonentes/speaker_${speakerID}.png`;

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
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">More</Button>
      </CardActions>
    </Card>
  );
};
