import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import profile_img from "./imgs/profile1.svg";
import Jumbotron from "react-bootstrap/Jumbotron";

class About extends Component {
  state = {};
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
              <h1
                style={{
                  color: "#47646f",
                }}
              >
                MOOCer 2.0
              </h1>
              <p
                style={{
                  color: "#47646f",
                }}
              >
                MOOCer v2.0 aims to create a centralized location that allows
                users to find the right courses, better manage their online
                portfolios, and be able to follow a well designed specialization
                this is not limited by platforms as well as potentially tracking
                all of their course progresses
              </p>
            </Jumbotron>
            {/* <Card className="h-100">
              <Card.Body
                style={{
                  backgroundColor: "#f6f8fa",
                }}
              >
                <Card.Title
                  style={{
                    color: "#47646f",
                  }}
                >
                  About
                </Card.Title>
                <Card.Text
                  style={{
                    color: "#47646f",
                  }}
                >
                  As of 2018, there are 30 million registered users on Coursera,
                  14 million on edX and 8 million users on Udacity. The growth
                  of Massive Open Online Course(MOOCs) has been booming ever
                  since Stephen Downes and Georgia Siemens offered the first
                  free course on Connectivism and Connectivity Knowledge in 2008
                  with the intention to explore possibilities of a richer
                  learning made possible by online tools. Ever since, there has
                  been a massive increase in the number of free courses
                  available online ranging from every aspect of knowledge and
                  offered by many top universities and companies around the
                  globe. MOOCs were created with the intention to bring about
                  ease of learning by providing unlimited participation and open
                  access through web. However, with the increasing options for
                  courses among multiple platforms such Coursera, edX, and
                  Udacity users are faced with choice overload that can hinder
                  their learning. In addition, studies show that out of all the
                  people that sign up for MOOCs only about 3.3 percent completed
                  their course in the year 2017-2018. One of the reasons why
                  people fail to complete their courses can be traced back to
                  the fact that there are so many platforms available which
                  makes it difficult to find the right courses, to keep track of
                  user’s online portfolio, and track their course progresses.
                  With our project we want to build on top of the previous
                  MOOCer project to integrate more functionalities and
                  modularities to further facilitate online learning. MOOCer
                  v2.0 aims to create a centralized location that allows users
                  to find the right courses, better manage their online
                  portfolios, and be able to follow a well designed
                  specialization this is not limited by platforms as well as
                  potentially tracking all of their course progresses.
                </Card.Text>
              </Card.Body>
            </Card> */}
            {/* #1e383c */}
          </Col>
        </Row>
        <Row className="h-50 mt-2 ">
          {/* align-items-center justify-content-center */}
          <Col className="h-100 " xs={{ span: 6 }}>
            <Card
              className="h-100 overflow-auto"
              style={{
                backgroundColor: "#47646f",
              }}
            >
              <Card.Body
                style={{
                  backgroundColor: "#47646f",
                }}
              >
                <Card.Text
                  style={{
                    color: "#f6f8fa",
                  }}
                >
                  As of 2018, there are 30 million registered users on Coursera,
                  14 million on edX and 8 million users on Udacity. The growth
                  of Massive Open Online Course(MOOCs) has been booming ever
                  since Stephen Downes and Georgia Siemens offered the first
                  free course on Connectivism and Connectivity Knowledge in 2008
                  with the intention to explore possibilities of a richer
                  learning made possible by online tools. Ever since, there has
                  been a massive increase in the number of free courses
                  available online ranging from every aspect of knowledge and
                  offered by many top universities and companies around the
                  globe. MOOCs were created with the intention to bring about
                  ease of learning by providing unlimited participation and open
                  access through web. However, with the increasing options for
                  courses among multiple platforms such Coursera, edX, and
                  Udacity users are faced with choice overload that can hinder
                  their learning. In addition, studies show that out of all the
                  people that sign up for MOOCs only about 3.3 percent completed
                  their course in the year 2017-2018. One of the reasons why
                  people fail to complete their courses can be traced back to
                  the fact that there are so many platforms available which
                  makes it difficult to find the right courses, to keep track of
                  user’s online portfolio, and track their course progresses.
                  With our project we want to build on top of the previous
                  MOOCer project to integrate more functionalities and
                  modularities to further facilitate online learning.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="h-100 " xs={{ span: 5 }}>
            <Row className="h-50 justify-content-center ">
              <Col
                className="align-items-center justify-content-center "
                xs={{ span: 5 }}
              >
                <img
                  src={profile_img}
                  alt="Profile"
                  className="h-100 w-100"
                  // style={{ height: "50%", width: "%" }}
                />
              </Col>
              <Col
                className="h-100 align-items-center justify-content-center text-white"
                xs={{ span: 5 }}
              >
                <Card
                  className="overflow-auto"
                  style={{
                    width: "18rem",
                    height: "90%",
                    backgroundColor: "#c3ccd3",
                  }}
                >
                  <Card.Body>
                    <Card.Title>Jayden Sun</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content. Some quick example
                      text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="h-50 justify-content-center ">
              <Col
                className="align-items-center justify-content-center"
                xs={{ span: 5 }}
              >
                <img
                  src={profile_img}
                  alt="Profile"
                  className="h-100 w-100"
                  // style={{ height: "50%", width: "%" }}
                />
              </Col>
              <Col
                className="align-items-center justify-content-center h-100"
                xs={{ span: 5 }}
              >
                <Card
                  className="overflow-auto align-items-center justify-content-center text-white"
                  style={{
                    width: "18rem",
                    height: "90%",
                    backgroundColor: "#c3ccd3",
                  }}
                >
                  <Card.Body>
                    <Card.Title>Yuli Liu</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content. Some quick example
                      text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
