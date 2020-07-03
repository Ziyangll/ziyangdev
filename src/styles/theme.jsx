import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#fff',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#000',
      main: '#000',
      // dark: will be calculated from palette.secondary.main,
      // contrastText: will be calculated to contrast with palette.secondary.main
    },
    contrastThreshold: 3,

    tonalOffset: 0.2,
  },
});
export default theme;
