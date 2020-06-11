import React from "react";
import { ThemeProvider, Button } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";
import "../styles/styles.css";
import theme from "../styles/theme";

function Resume() {
  return (
    <div className='main iframe'>
      <div className='download-button'>
        <ThemeProvider theme={theme}>
          <Button
            variant='contained'
            startIcon={<GetAppIcon />}
            href='https://docs.google.com/document/d/16LwQznWREwZ1q91mL66XC-1dowZzPzUMwREGq1g3HqQ/edit?usp=sharing'>
            Download
          </Button>
        </ThemeProvider>
      </div>

      <iframe
        title='resume'
        className='resume'
        src='https://docs.google.com/document/d/e/2PACX-1vQZfX3KiO4G7XFmK32wZBl8-viS113duNsh-GohyksdcMGlpeaoQFnC3RWEPa-zBM5yl1kVO3tx38Bl/pub?embedded=true'>
        Your browser doesn't support iframes
      </iframe>
    </div>
  );
}

export default Resume;
