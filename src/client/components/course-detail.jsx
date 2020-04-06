import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Lessons from "./lesson";

class CourseDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      degree: false,
      duration: "",
      learning: "",
      key: "",
      image: "",
      level: "",
      isFreeCourse: "",
      lessons: [],
      prerequisite: "",
      shortSummary: "",
      url: "",
      subtitle: "",
      summary: "",
      title: "",
      platform: "",
      reviews: [],
      courseid: "",
    };
  }
  componentDidMount() {
    console.log("a")
    console.log(this.props.match.params.id)
    const handle = this.props.match.params.id;
    fetch(`http://localhost:3000/api/courses/${handle}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState(() => ({
          degree: data[0].degree,
          duration: data[0].duration,
          learning: data[0].learning,
          key: data[0].key,
          image: data[0].image,
          level: data[0].level,
          isFreeCourse: data[0].isFreeCourse,
          lessons: data[0].lessons,
          prerequisite: data[0].prerequisite,
          shortSummary: data[0].shortSummary,
          url: data[0].url,
          subtitle: data[0].subtitle,
          summary: data[0].summary,
          title: data[0].title,
          platform: data[0].platform,
          reviews: data[0].reviews,
          courseid: data[0]._id,
        }));
      });
  }

  render() {
    let freeCourse = this.state.isFreeCourse == true ? "Free " : "";
    return (
      <Container className="align-items-center justify-content-center align-middle">
        <Row>
          <Col className="summary mt-5" xs={12}>
            <Jumbotron>
              <h1>{this.state.title}</h1>
              <p style={{ color: "#47646f" }}>{this.state.subtitle}</p>
              <Button
                className="courseLinkButton mt-2"
                onClick={(event) => {
                  event.preventDefault();
                  window.open(this.state.url);
                }}
              >
                Start {freeCourse}Course
              </Button>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col className="summary" xs={6}>
            <h4 style={{ color: "#1e383c" }}>About this Course</h4>
            <div className="summary-text">
              <p style={{ color: "#47646f" }}>{this.state.summary}</p>
            </div>
          </Col>

          <Col className="details" xs={6}>
            <Row className="section">
              <Col xs={4}>
                <h6>Course Cost</h6>
                <h5>{freeCourse}</h5>
              </Col>
              <Col xs={4}>
                <h6>Timeline</h6>
                <h5>Aprox. {this.state.duration}</h5>
              </Col>
              <Col xs={4}>
                <h6>Skill Level</h6>
                <h5>{this.state.level}</h5>
              </Col>
            </Row>
            <Row className="prerequisite mt-3">
              <Col xs={12}>
                <h6>Prerequisite</h6>
                <h5>{this.state.prerequisite.replace(/(<([^>]+)>)/gi, "")}</h5>
              </Col>
            </Row>

            <Row className="platform mt-3">
              <Col xs={12}>
                <h6>Platform</h6>
                <h5>{this.state.platform}</h5>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col className="lesson" xs={12}>
            <Lessons lessonList={this.state.lessons} />
          </Col>
        </Row>

        <Row className="Reviews">
          <Col xs={12}>
            <div></div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CourseDetail;
