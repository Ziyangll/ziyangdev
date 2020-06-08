import React from "react";
import Plx from "react-plx";
import "../styles/styles.css";

const parallaxData = [
  {
    start: 0,
    duration: 1000,
    properties: [

      {
        startValue: 0,
        endValue: 180,
        property: "rotate",
      },
    ],
  },
];

function Home() {
  return (
    <Plx className='plx' parallaxData={parallaxData}>
      <div className='main'>
        <h2>Home</h2>
        <p>Website under construction...</p>
        <p>Website under construction...</p>
        <p>Website under construction...</p>
        <p>Website under construction...</p>
        <p>Website under construction...</p>
        <p>Website under construction...</p>
        <p>Website under construction...</p>
        <p>Website under construction...</p>
        <p>Website under construction...</p>
        <p>Website under construction...</p>
        <p>Website under construction...</p>
        <p>Website under construction...</p>
        <p>Website under construction...</p>
        <p>Website under construction...</p>
        <p>Website under construction...</p>
        <p>Website under construction...</p>
        <p>Website under construction...</p>
        <p>Website under construction...</p>
        <p>Website under construction...</p>
        <p>Website under construction...</p>
        <p>Website under construction...</p>
        <p>Website under construction...</p>
        <p>Website under construction...</p>
      </div>
    </Plx>
  );
}

export default Home;
