import React from "react";
import "../../styles/styles.css";
import FadeInSection from "../FadeInSection";

export default function Intro() {
  return (
    <div className='content'>
      <div className='title'>
        <FadeInSection key='title'>
          <h1 class="title-text">Ziyang Li</h1>
          <h1 class="text subtitle">fullstack developer</h1>
        </FadeInSection>
      </div>
      <img
        className='IntroImage'
        src={process.env.PUBLIC_URL + "/nice.svg"}
        alt='ziyang li'>
      </img>
    </div>
  );
}
