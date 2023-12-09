import { Box, Button, Grid, Typography } from "@mui/material";
import styles from "../../styles/layout.module.css";
import { BlogButton, FindButton } from "../elements";

//import { useTheme } from "@mui/material/styles";
const image =
  import.meta.env.BASE_URL +
  "assets/imagesHome/imagesPonentes/imageFounder.png";

export const MainInfo = () => {
  //const theme = useTheme();
  return (
    <>
      <Grid className={`${styles.description}`}>
        <Grid className={`${styles.image__descriptions} p-3 flex items-center`}>
          <div className={`${styles.image__funder}`}>
            <Box>
              <img className={styles.image} src={image} alt="imageFounder" />
            </Box>
            <Box ml={2}>
              <Typography variant="h6" component="h2">
                Anthony Laverde
              </Typography>
              <Typography variant="body2" component="p">
                Founder & CEO
              </Typography>
            </Box>
          </div>
        </Grid>

        <Grid className={`${styles.text__descriptions}`}>
          <Box className={`${styles.quote__container}`}>
            <span className={`${styles.quote__rigth}`}></span>
          </Box>
          <Typography
            className={`${styles.text}`}
            variant="h6"
            sx={{ fontWeight: "bold" }}
          >
            A <span className="font-extrabold text-secondary">philosophy</span>{" "}
            centered around accessibility to information and community within
            the expansive realm of IT and{" "}
            <span className="text-secondary">our capabilities</span>
          </Typography>

          <Box className={`${styles.ourLogo__container}`}>
            <Typography className={`${styles.ourlogo}`} variant="p">
              &lt;Dev Conference / &gt;
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid className={`${styles["join__layaout--container"]}`}>
        <Box className={`${styles.join__text}`}>
          are you ready ? join your next conference
        </Box>

        <Box className={`${styles.join__buttons} `}>
          <BlogButton />
          <FindButton />
        </Box>
      </Grid>
    </>
  );
};

/* <Box className={`${styles.join__layout}`}>
          <Box className={`${styles.join__text} border`}>
            <Typography className={`${styles.text}`} variant="p">
              are you ready ? join your next conference
            </Typography>
            <Typography
              className={`${styles.text__small}`}
              variant="body2"
              component="p"
            >
              build opportunities, work on yourself
            </Typography>
          </Box>

          <Box className={`${styles.join__buttons} border`}>
            <FindButton />
            <BlogButton />
          </Box>
        </Box> */

/*  <Box className={`${styles.join__description}`}>
          <Typography className={`${styles.description}`} variant="p">
            Are you ready to join our community?
          </Typography>
        </Box>

        <Box className={`${styles.join__buttons} border`}>
          <Box className={`${styles.button_group}`}>
            <FindButton />
            <BlogButton />
          </Box>
        </Box>*/
