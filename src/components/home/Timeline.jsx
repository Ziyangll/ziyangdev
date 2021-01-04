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
      <PastTimelineElement
        data='Jun, 2020'
        icon={<CodeIcon />}
        title='Created this website with React'
        subtitle='ziyang.dev'
        contentOne='Personal portfolio website to display my projects'
        contentTwo=''
      />
      <PastTimelineElement
        data='Feb, 2020'
        icon={<EmojiEmotionsIcon />}
        title='Hackathon Winner'
        subtitle='MLH Auburn Hacks'
        contentOne='We made a finance website for real time stock trading'
        contentTwo='Used Bootstrap HTML5 CSS3 and Flask'
      />
      <PastTimelineElement
        data='Nov, 2019'
        icon={<CodeIcon />}
        title='Competed in the Southeast USA Regional Contest'
        subtitle='ICPC 2019 fall'
        contentOne='Joined Auburn Competitive Programming Team'
        contentTwo='Participated in the ICPC competitive programming contest'
      />
      <PastTimelineElement
        data='2019-2023'
        icon={<SchoolIcon />}
        title='Majored in Software Engineering'
        subtitle='Auburn University'
        contentOne=''
        contentTwo=''
      />
      <PastTimelineElement
        data='2015 - 2019'
        icon={<SchoolIcon />}
        title='Graduated High School with honors'
        subtitle='Homewood High School'
        contentOne='Became interested in computer science'
        contentTwo='Started a programming club'
      />
      <VerticalTimelineElement
        iconStyle={{ background: "white", color: "black" }}
        icon={<StarIcon />}
      />
    </VerticalTimeline>
  );
}
