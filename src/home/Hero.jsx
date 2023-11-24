import React from "react";
//import { MainLayout } from "../layout";
import { Box, Grid, ThemeProvider } from "@mui/material";
import { homeTheme } from "./theme/theme";
import { FindButton, CreatedButton } from "../components/button";
import { Cards, FilterEvents, FilterMainEvents } from "./components";
import styles from "./styles/home.module.css";
import { MainLayout } from "../layout/MainLayout";
import heroImage from "/assets/images/hero.png"; // Importa la imagen aquí

export const Hero = () => {
  return (
    <MainLayout>
      <Grid className={styles.hero__container} container spacing={2}>
        <Grid
          classes={styles.hero__image}
          item
          xs={12}
          md={5}
          sx={{ order: { xs: 1, md: 2 } }}
        >
          <img className="image" src={heroImage} alt="" />
        </Grid>
        <Grid
          className={styles.hero__description}
          item
          xs={12}
          md={5}
          sx={{ order: { xs: 2, md: 1 } }}
        >
          <Grid className="description" item xs={12}>
            <h3 className={styles.description__text}>
              Reliable, secure conference to get the best events
            </h3>
          </Grid>
          <Grid className={styles.small}>
            <small className={styles.description__small}>
              IHold incredible events, share knowledge, build and grow your
              product , create opportunity
            </small>
          </Grid>
          <Box className={styles.hero__butons}>
            <ThemeProvider theme={homeTheme}>
              <FindButton />
              <CreatedButton />
            </ThemeProvider>
          </Box>
        </Grid>
      </Grid>
      <Grid className={`${styles.filter__container}`} xs={12}>
        <FilterEvents />
        <FilterMainEvents />
      </Grid>
      <Grid className={`${styles.cards__container}`} container xs={12}>
        <Cards />
      </Grid>
    </MainLayout>
  );
};
