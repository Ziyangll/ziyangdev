import React from "react";
import "../styles/styles.css";

function Resume() {
  return (
    <div className='main'>
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
