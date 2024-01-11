import { useTheme } from "@emotion/react";
import { Button, Typography } from "@mui/material";

import React from "react";
import { Link, NavLink } from "react-router-dom";

export const FindButton = () => {
  const handleClick = () => {
    // Aquí defines la ruta a la que quieres redirigir
    const route = "/products";
    // Realiza la redirección
    window.location.href = route;
  };
  const theme = useTheme();
  return (
    <>
      <Button
        onClick={handleClick}
        sx={{
          color: "white",
          border: "1px solid",
          opacity: 0.7,
          "&:hover": {
            opacity: 1,
          },
        }}
      >
        <Typography
          className="p-2"
          sx={{
            fontWeight: "bold",
            textTransform: "capitalize",
            fontSize: 20,
          }}
        >
          Find event
        </Typography>
      </Button>
    </>
  );
};
