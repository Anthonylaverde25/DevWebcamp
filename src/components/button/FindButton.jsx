import { useTheme } from "@emotion/react";
import { Button, Typography } from "@mui/material";

import React from "react";

export const FindButton = () => {
  const theme = useTheme();
  return (
    <>
      <Button
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
          sx={{ fontWeight: "bold", textTransform: "capitalize", fontSize: 20 }}
        >
          Find event
        </Typography>
      </Button>
    </>
  );
};
