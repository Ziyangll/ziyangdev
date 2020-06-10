import React from "react";
import Intro from "./Intro";
import About from "./About";
import Timeline from "./Timeline";
import Footer from "../Footer";

import "../../styles/styles.css";

function Home() {
  return (
    <div>
      <Intro />
      <About />
      <Timeline />
      <Footer />
    </div>
  );
}

export default Home;
