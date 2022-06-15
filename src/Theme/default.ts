import { createTheme } from "@mui/material";
import { orange, teal } from "@mui/material/colors";

const theme = createTheme({
  shape: {
    borderRadius: 8,
  },
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: teal[50],
    },
  },
});

export default theme;
