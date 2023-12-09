import { DataArray } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

export const FindButton = () => {
  return (
    <>
      <Button
        sx={{
          width: "100%",
          backgroundColor: "",
          fontWeight: "bold",
          color: "white",
          fontSize: "1rem",
          letterSpacing: "1px",
          padding: "1rem 0rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          transition: "all ease 0.5s",
          "&:hover": {
            backgroundColor: "#9561e2",
          },
        }}
      >
        Find Conference...
        <DataArray />
      </Button>
    </>
  );
};
// sx={{ border: "2px solid", padding: "0.5rem" }}
