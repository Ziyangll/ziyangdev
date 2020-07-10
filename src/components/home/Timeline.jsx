import React from "react";
//import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import StarIcon from "@material-ui/icons/Star";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import CodeIcon from "@material-ui/icons/Code";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import PastTimelineElement from "./PastTimelineElement";

export default function MyTimeline() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className='vertical-timeline-element'
        contentStyle={{ background: "white", color: "black" }}
        contentArrowStyle={{ borderRight: "7px solid  cyan" }}
        date='2019 - present'
        iconStyle={{ background: "white", color: "black" }}
        icon={<SchoolIcon />}>
        <h3 className='vertical-timeline-element-title'>
          I am majoring in <span className="text">Software Engineering </span>
        </h3>
        <h4 className='vertical-timeline-element-subtitle'>
          Auburn University
        </h4>
        <p><span className="text">4.0 GPA</span></p>
        <p>I am currently on the Dean's List</p>
        <p>Member of the Auburn Competitive Programming Team</p>
      </VerticalTimelineElement>
      <PastTimelineElement
        data='2020'
        icon={<CodeIcon />}
        title='Made this website in React'
        subtitle='ziyang.dev'
        contentOne='Personal portfolio website to display my projects'
        contentTwo='Learned the MERN stack and DevOp'
      />
      <PastTimelineElement
        data='2020'
        icon={<EmojiEmotionsIcon />}
        title='Hackathon Winner'
        subtitle='MLH Auburn Hacks'
        contentOne='We made a finance website for real time stock trading'
        contentTwo='Used Bootstrap HTML5 CSS3 and Flask'
      />
      <PastTimelineElement
        data='2019'
        icon={<CodeIcon />}
        title='Competed in the Southeast USA Regional Contest'
        subtitle='ICPC 2019 fall'
        contentOne='Joined Auburn Competitive Programming Team'
        contentTwo='My first competitive programming contest'
      />
      <PastTimelineElement
        data='2015 - 2019'
        icon={<SchoolIcon />}
        title='Became interested in computer science'
        subtitle='Homewood High School'
        contentOne='Graduated High School with honor'
        contentTwo='Me and my friends started a club to learn Python'
      />
      <VerticalTimelineElement
        iconStyle={{ background: "white", color: "black" }}
        icon={<StarIcon />}
      />
    </VerticalTimeline>
  );
}
