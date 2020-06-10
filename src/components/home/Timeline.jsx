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

export default function MyTimeline() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        contentStyle={{ background: "#3282b8", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #3282b8" }}
        date='2020'
        iconStyle={{ background: "#3282b8", color: "#fff" }}
        icon={<CodeIcon />}>
        <h3 className='vertical-timeline-element-title'>
          Made this website in React
        </h3>
        <p>Learned React and how websites works.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className='vertical-timeline-element--education'
        contentStyle={{ background: "#0f4c75", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #0f4c75" }}
        date='2020'
        iconStyle={{ background: "#0f4c75", color: "#fff" }}
        icon={<EmojiEmotionsIcon />}>
        <h3 className='vertical-timeline-element-title'>
          Won my first Hackathon
        </h3>
        <h4 className='vertical-timeline-element-subtitle'>Auburn Hacks</h4>
        <p>
          Me and my team created a finance website for trading fake stocks with
          real data.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className='vertical-timeline-element--education'
        contentStyle={{ background: "#0f4c75", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #0f4c75" }}
        date='2019 - present'
        iconStyle={{ background: "#0f4c75", color: "#fff" }}
        icon={<SchoolIcon />}>
        <h3 className='vertical-timeline-element-title'>
          Majored in Software Engineering
        </h3>
        <h4 className='vertical-timeline-element-subtitle'>
          Auburn University
        </h4>
        <p>4.0 GPA</p>
        <p>I am currently on the Dean's List.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className='vertical-timeline-element--education'
        contentStyle={{ background: "#0f4c75", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #0f4c75" }}
        date='2015 - 2019'
        iconStyle={{ background: "#0f4c75", color: "#fff" }}
        icon={<SchoolIcon />}>
        <h3 className='vertical-timeline-element-title'>
          Became interested in computer science
        </h3>
        <h4 className='vertical-timeline-element-subtitle'>
          Homewood High School
        </h4>
        <p>Graduated High School with honor.</p>
        <p>
          Me and my friends started a club to learn and teach <b>Python</b>.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        icon={<StarIcon />}
      />
    </VerticalTimeline>
  );
}
