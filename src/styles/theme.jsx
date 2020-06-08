import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#0f4c75',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#bbe1fa',
      main: '#1b262c',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#3282b8',
    },
    contrastThreshold: 3,

    tonalOffset: 0.2,
  },
});
export default theme;
