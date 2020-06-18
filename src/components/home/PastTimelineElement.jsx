import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function PastTimelineElement({
  data,
  icon,
  title,
  subtitle,
  contentOne,
  contentTwo,
}) {
  return (
    <VerticalTimelineElement
      className='vertical-timeline-element--education'
      contentStyle={{ background: "#0f4c75", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #0f4c75" }}
      date={data}
      iconStyle={{ background: "#0f4c75", color: "#fff" }}
      icon={icon}>
      <h3 className='vertical-timeline-element-title'>{title}</h3>
      <h4 className='vertical-timeline-element-subtitle'>{subtitle}</h4>
      <p>{contentOne}</p>
      <p>{contentTwo}</p>
    </VerticalTimelineElement>
  );
}
