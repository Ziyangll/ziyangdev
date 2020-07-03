import React from "react";
import "../styles/styles.css";

export default function Footer() {
  return (
    <div className='footer'>
      <p className="title-text">{new Date().getFullYear()} ziyang.dev</p>
    </div>
  );
}
