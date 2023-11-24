import { Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { AutoAwesomeMotion } from "@mui/icons-material";

export const CreatedButton = () => {
  const theme = useTheme();

  return (
    <>
      <Button
        className="btn__prueba"
        sx={{
          color: "white",
          backgroundColor: theme.palette.button_color.pink,
          "&:hover": {
            backgroundColor: theme.palette.button_color.darkPink,
          },
        }}
      >
        <Typography
          className=" flex items-center justify-center p-2 gap-3  w-60"
          sx={{ fontWeight: "bold", textTransform: "capitalize", fontSize: 20 }}
        >
          create
          <AutoAwesomeMotion className="w-60" sx={{ fontSize: 30 }} />
        </Typography>
      </Button>
    </>
  );
};
