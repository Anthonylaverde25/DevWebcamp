import { Grid } from "@mui/material";
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

import React, { useState } from "react";
import { Footer, MainInfo, Navbar, Newsletter } from "./components";
import "../layout/styles/layout.css"; // Ruta al archivo CSS
import { ProductCart } from "../products/components/cart/ProductCart";

export const MainLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handlerOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="container__layout">
      {open && <ProductCart open={open} setOpen={setOpen} />}
      <Navbar handlerOpen={handlerOpen} />
      <main className="main__container">{children}</main>
      <MainInfo />
      <Newsletter />
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
