import React, { Component } from "react";
// import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import "../course/course-detail.module.css";
import { Timeline, Event } from "react-timeline-scribble";

class Experiences extends Component {
  state = {};

  renderLessonData() {
    return this.props.experiencesList.map((exp, index) => {
      return (
        // <TimelineItem
        //   key={index}
        //   dateText={exp.startDate + " – " + exp.endDate}
        //   dateInnerStyle={{ background: "#8ea6b2", color: "#f6f8fa" }}
        // >
        //   <h3 style={{ color: "#1e383c" }}>{exp.title}</h3>
        //   <h4 style={{ color: "#47646f" }}>{exp.company}</h4>
        //   <p style={{ color: "#47646f" }}>{exp.description}</p>
        // </TimelineItem>
        <Event
          key={index}
          interval={exp.startDate + " – " + exp.endDate}
          title={exp.title}
          subtitle={exp.company}
        >
          {exp.description}
        </Event>
      );
    });
  }

  //   <Timeline>
  //   <Event interval={} title={"Lorem"} subtitle={"Ipsum"}>
  //     dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
  //     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  //     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  //     consequat. Duis aute irure dolor in reprehenderit in voluptate velit
  //     esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
  //     cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
  //     id est laborum.
  //   </Event>
  //   <Event interval={"2015 – 2016"} title={"Lorem"} subtitle={"Ipsum"}>
  //     dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
  //     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  //     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  //     consequat. Duis aute irure dolor in reprehenderit in voluptate velit
  //     esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
  //     cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
  //     id est laborum.
  //   </Event>
  // </Timeline>

  render() {
    return (
      <Timeline
      // lineColor={"#c3ccd3"}
      >
        {this.renderLessonData()}
      </Timeline>
    );
  }
}

export default Experiences;
