import React from "react";
import "../../styles/styles.css";
import FadeInSection from "../FadeInSection";
import ReactMarkdown from "react-markdown";

export default function About() {
  const input =
    "# I am a fullstack web developer\n\n" +
    "I am experienced in the MERN stack (Mongodb Express React Node.js)\n\n" +
    "I am familiar with both AWS and Google Cloud Platform\n\n" +
    "I am also experienced with " +
    "Java," +
    "Python," +
    "and C++";

  return (
    <div className='about'>
      <FadeInSection>
        <ReactMarkdown className='text' source={input} />
        <br></br>
      </FadeInSection>
    </div>
  );
}
