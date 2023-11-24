import { Grid } from "@mui/material";
import React from "react";
import { Footer, Navbar } from "./components";
import "../layout/styles/layout.css"; // Ruta al archivo CSS

export const MainLayout = ({ children }) => {
  return (
    <div className="container__layout">
      <Navbar />
      <main className="main__container">{children}</main>
      <Footer />
    </div>
  );
};

/*
style={{
        maxWidth: 1400,
        width: '100%', // Ancho completo por defecto
        margin: '0 auto', // Centra el contenedor cuando no está al 100%

*/

{
  {
    /*<Grid container direction="column">
<header className="border">
  <Grid item>
    <Navbar />
  </Grid>
</header>

<main className="border">
  <Grid item>
    <container>{children}</container>
  </Grid>
</main>

<footer className="border">
  <Grid>
    <Footer />
  </Grid>
</footer>
</Grid> */
  }
}
