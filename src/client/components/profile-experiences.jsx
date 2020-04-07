import React, { Component } from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import style from "./course-detail.module.css";

class Experiences extends Component {
  state = {};

  renderLessonData() {
    return this.props.experiencesList.map((exp, index) => {
      return (
        <TimelineItem
          key={index}
          dateText={exp.startDate + " – " + exp.endDate}
          dateInnerStyle={{ background: "#8ea6b2", color: "#f6f8fa" }}
        >
          <h3 style={{ color: "#1e383c" }}>{exp.title}</h3>
          <h4 style={{ color: "#47646f" }}>{exp.company}</h4>
          <p style={{ color: "#47646f" }}>{exp.description}</p>
        </TimelineItem>
      );
    });
  }

  render() {
    return <Timeline lineColor={"#c3ccd3"}>{this.renderLessonData()}</Timeline>;
  }
}

export default Experiences;
