import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Jumbotron from "react-bootstrap/Jumbotron";

class CourseDetail extends Component {
  state = {};
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container className="h-100 overflow-auto">
        <Row className="h-20 mt-5 align-items-center justify-content-center overflow-auto">
          <Col
            className="h-100 align-items-center justify-content-center"
            xs={{ span: 12 }}
          >
            <Jumbotron
              fluid
              className="pl-5 pr-5"
              style={{
                backgroundColor: "#f6f8fa",
              }}
            >
              <h1>this.props.courseDetail.title</h1>
              <p>this.props.courseDetail.shortSummary</p>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CourseDetail;
