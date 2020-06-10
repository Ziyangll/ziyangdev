import React from "react";
import "../../styles/styles.css";
import FadeInSection from "../FadeInSection";

export default function Intro() {
  return (
    <div className='content'>
      <div className='title'>
        <FadeInSection key='title'>
          <h1>Hello</h1>
          <h1>I am Ziyang Li</h1>
        </FadeInSection>
      </div>
      <img
        className='IntroImage'
        src={process.env.PUBLIC_URL + "/minimal-sunset.jpg"}
        alt='ziyang li'></img>
    </div>
  );
}
