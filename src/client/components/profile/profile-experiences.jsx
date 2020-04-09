import React, { Component } from "react";
// import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import "../course/course-detail.module.css";
import { Timeline, Event } from "react-timeline-scribble";

class Experiences extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experiencesList: props.experiencesList,
    };
  }
  componentDidMount() {
    console.log("exp props", this.props);
    this.setState({
      experiencesList: this.props.experiencesList,
    });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.experiencesList != this.props.experiencesList) {
      this.setState({
        experiencesList: this.props.experiencesList,
      });
    }
  }
  renderLessonData() {
    return this.props.experiencesList.map((exp, index) => {
      return (
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
