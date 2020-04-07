import React, { Component } from "react";
import { Form, Button, Container, Row, Col, Jumbotron } from "react-bootstrap";
import Nav from "./navigation";
import Lessons from "./lesson";
import Reviews from "./reviews";
import { VerifyToken } from "./auth"

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
      review_page: 0,
      reviews: {
        reviews: [
          {
            _id: "5e8b70ed7ee00d6900695b58",
            comment: "Great course",
            rating: 5,
            course: "5e8935b96eb291b24ab293d6",
            rated_by: "Angela",
            created_at: "2020-04-06T18:11:57.129Z",
            __v: 0,
          },
          {
            _id: "5e8b70d07ee00d6900695b57",
            comment: "bad course",
            rating: 1,
            course: "5e8935b96eb291b24ab293d6",
            rated_by: "Jayden Sun",
            created_at: "2020-04-06T18:11:28.821Z",
            __v: 0,
          },
        ],
        limit: 5,
        page: 1,
        pages: 1,
        total: 2,
        avg_rating: 3,
      },
      courseid: "",
    };
  }

  componentDidMount() {
    if (!VerifyToken()) {
      return this.props.history.push("/");
    }

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

  loadMoreReview(pageNumber) {
    this.setState(
      {
        review_page: pageNumber,
      },
      () => this.loadPage()
    );
  }

  render() {
    let freeCourse = this.state.isFreeCourse == true ? "Free " : "";
    let platform =
      this.state.platform.slice(0, 1).toUpperCase() +
      this.state.platform.slice(1);

    let captalize = (str) => {
      return str.slice(0, 1).toUpperCase() + str.slice(1);
    };

    return (
      <>
        <Nav />
        <Container className="align-items-center justify-content-center align-middle">
          <Row>
            <Col className="summary mt-5" xs={12}>
              <Jumbotron
                style={{
                  backgroundImage:
                    "url(" +
                    "https://mdbootstrap.com/img/Photos/Others/gradient1.jpg" +
                    ")",
                  backgroundSize: "cover",
                }}
              >
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
                  <h5>{captalize(this.state.level)}</h5>
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
                  <h5>{captalize(this.state.platform)}</h5>
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
              <div>
                <Reviews courseId={this.props.match.params.id} />
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default CourseDetail;
