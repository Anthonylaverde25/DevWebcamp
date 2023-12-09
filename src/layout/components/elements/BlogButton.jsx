import { Button } from "@mui/material";
import React from "react";

export const BlogButton = () => {
  return (
    <>
      <Button
        sx={{
          color: "#f8fafc",
          border: "0.5px solid",
          width: "100%",
          fontWeight: "bold",
          padding: "1rem 0rem",
        }}
        className="border"
      >
        Our Blog
      </Button>
    </>
  );
};
// sx={{ border: "2px solid", padding: "0.5rem", color: "white" }}
