import React from "react";
import "../styles/styles.css";

export default function Footer() {
  return (
    <div className='footer'>
      <p>© {new Date().getFullYear()} ziyang.dev</p>
    </div>
  );
}
