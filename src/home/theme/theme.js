import { createTheme } from "@mui/material/styles";
import { green, grey, pink, purple, red } from "@mui/material/colors";

export const homeTheme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
    button_color: {
      pink: pink[500],
      darkPink: pink[700],
      hoverGrey: grey[200],
    },
  },
});
