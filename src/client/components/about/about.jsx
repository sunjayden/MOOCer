import React, { Component } from "react";
import { Container, Row, Col, Card, Media } from "react-bootstrap";

import profile_img1 from "../imgs/profile1.svg";
import profile_img2 from "../imgs/profile2.svg";
import Jumbotron from "react-bootstrap/Jumbotron";
import Nav from "../header/navigation";
import { SocialIcon } from "react-social-icons";

class About extends Component {
  state = {};
  render() {
    return (
      <>
        <Nav />
        <Container className="h-100 overflow-auto mb-5">
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
                  portfolios, and be able to follow a well designed
                  specialization this is not limited by platforms as well as
                  potentially tracking all of their course progresses
                </p>
              </Jumbotron>
            </Col>
          </Row>
          <Row className="mt-2 ">
            {/* align-items-center justify-content-center */}
            <Col className="h-50 " xs={{ span: 6 }}>
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
                    className="h-100 "
                    style={{
                      color: "#f6f8fa",
                    }}
                  >
                    As of 2018, there are 30 million registered users on
                    Coursera, 14 million on edX and 8 million users on Udacity.
                    The growth of Massive Open Online Course(MOOCs) has been
                    booming ever since Stephen Downes and Georgia Siemens
                    offered the first free course on Connectivism and
                    Connectivity Knowledge in 2008 with the intention to explore
                    possibilities of a richer learning made possible by online
                    tools. Ever since, there has been a massive increase in the
                    number of free courses available online ranging from every
                    aspect of knowledge and offered by many top universities and
                    companies around the globe. MOOCs were created with the
                    intention to bring about ease of learning by providing
                    unlimited participation and open access through web.
                    However, with the increasing options for courses among
                    multiple platforms such Coursera, edX, and Udacity users are
                    faced with choice overload that can hinder their learning.
                    In addition, studies show that out of all the people that
                    sign up for MOOCs only about 3.3 percent completed their
                    course in the year 2017-2018. One of the reasons why people
                    fail to complete their courses can be traced back to the
                    fact that there are so many platforms available which makes
                    it difficult to find the right courses, to keep track of
                    user’s online portfolio, and track their course progresses.
                    With our project we want to build on top of the previous
                    MOOCer project to integrate more functionalities and
                    modularities to further facilitate online learning.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="h-100 " xs={{ span: 6 }}>
              <Row className="h-50">
                <Col className="mb-4" xs={12}>
                  <Media
                    className="info-card"
                    style={{ backgroundColor: "#E5E9ED", height: "280px" }}
                  >
                    <img className="mr-3 course-image" src={profile_img1} />
                    <Media.Body>
                      {/* <div className="provider">Jayden Sun</div> */}
                      <h3>Jayden Sun</h3>
                      <p className="course-summary">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div className="justify-content-end">
                        <SocialIcon url="https://www.linkedin.com/in/jaydensun/" />
                        <SocialIcon url="https://github.com/sunjayden" />
                      </div>
                    </Media.Body>
                  </Media>
                </Col>
              </Row>

              <Row className="h-50">
                <Col xs={12}>
                  <Media
                    className="info-card p-5"
                    style={{ backgroundColor: "#E5E9ED", height: "280px" }}
                  >
                    <img className="mr-3 course-image" src={profile_img2} />
                    <Media.Body>
                      {/* <div className="provider">Jayden Sun</div> */}
                      <h3>Yuli Liu</h3>
                      <p className="course-summary">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <SocialIcon url="https://www.linkedin.com/in/yuliliu97/" />
                      <SocialIcon url="https://github.com/Yuliy97" />
                    </Media.Body>
                  </Media>
                </Col>
              </Row>
              <Row>
                <Col></Col>
              </Row>

              {/* <Row className="h-50 justify-content-center ">
                <Col
                  className="align-items-center justify-content-center "
                  xs={{ span: 5 }}
                >
                  <img
                    src={profile_img1}
                    alt="Profile"
                    // className="h-100 w-100"
                    style={{ height: "90%", width: "90%" }}
                  />
                </Col>
                <Col
                  className="h-100 align-items-center justify-content-center text-white"
                  xs={{ span: 7 }}
                >
                  <Card
                    className="overflow-auto w-100"
                    style={{
                      // width: "100%",
                      height: "90%",
                      backgroundColor: "#c3ccd3",
                    }}
                  >
                    <Card.Body>
                      <Card.Title>Jayden Sun</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row className="h-50 justify-content-center ">
                <Col
                  className="align-items-center justify-content-center "
                  xs={{ span: 5 }}
                >
                  <img
                    src={profile_img2}
                    alt="Profile"
                    style={{ height: "90%", width: "90%" }}
                  />
                </Col>
                <Col
                  className="h-100 align-items-center justify-content-center text-white"
                  xs={{ span: 7 }}
                >
                  <Card
                    className="overflow-auto w-100"
                    style={{
                      // width: "100%",
                      height: "90%",
                      backgroundColor: "#c3ccd3",
                    }}
                  >
                    <Card.Body>
                      <Card.Title>Yuli Liu</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row> */}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default About;
