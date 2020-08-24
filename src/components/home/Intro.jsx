import React from "react";
import "../../styles/styles.css";
import Particles from "react-particles-js";

export default function Intro() {
  return (
    <div className='content'>
      <div className='title'>
          <h1 class='title-text'>Ziyang Li</h1>
          <h1 class='text subtitle'>Software Engineer</h1>
      </div>

      <Particles
        className='intro-background'
        params={{
          particles: {
            number: {
              density: {
                enable: true,
              },
            },
            size: {
              value: 0,
            },
            links: {
              distance: 200,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
            },
            fpsLimit: 60,
            detectRetina: true,
          },
        }}
      />
    </div>
  );
}
