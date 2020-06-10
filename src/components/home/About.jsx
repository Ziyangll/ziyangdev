import React from "react";
import "../../styles/styles.css";
import FadeInSection from "../FadeInSection";

export default function About() {
  return (
    <div className='about'>
      <FadeInSection>
        <h1 className='about-text text'>Who am I?</h1>
        <br></br>
      </FadeInSection>
      <FadeInSection>
        <p className='text'>I am a fullstack web and mobile developer.</p>
        <br></br>
      </FadeInSection>
      <FadeInSection>
        <p className='text'>
          I am passionate for programming and love to create apps for web and
          mobile devices.
        </p>
        <br></br>
      </FadeInSection>

      <FadeInSection>
        <p className='text'>
          I am experienced with the <b>MERN</b>
          <span className='softText'> (Mongodb Express React Node.js)</span>
          stack.
        </p>
        <br></br>
      </FadeInSection>

      <FadeInSection>
        <p className='text'>
          I am also experienced with <b>Swift</b> <b>React-Native</b>, and
          <b> Python</b>.
        </p>
        <br></br>
      </FadeInSection>
    </div>
  );
}
