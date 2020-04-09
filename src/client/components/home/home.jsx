import React, { Component } from "react";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";
import HomeCarousel from "./home-carousel";
import cat_img1 from "../imgs/catalog_1.png";
import gs_img1 from "../imgs/get_started.png";
import "./home.module.css";
// import LoginRegisterModal from "./login-register";

class Home extends Component {
  // state = {};
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
    };
  }
  render() {
    return (
      // <Container>
      // {/* <Row className="mt-5 justify-content-center"> */}
      /* <Col xs={12}> */
      <div className="mt-5">
        <Jumbotron fluid className="p-5" style={{ height: "700px" }}>
          <Row
            style={{
              // justifyContent: "center",
              alignItems: "flex-end",
              height: "100%",
            }}
          >
            <Col xs={6}>
              <Row>
                <h1 className="display-1">MOOCer</h1>
              </Row>
              <Row>
                <h3 className="display-4">
                  A better application for online course management.
                </h3>
              </Row>
            </Col>
          </Row>
        </Jumbotron>
      </div>
      /* </Col> */
      // {/* </Row> */}
      // </Container>

      //   <Container fluid className="h-100">
      //     <Row className="h-100 align-items-center justify-content-center">
      //       <Col
      //         className="h-75 mr-2 align-items-center justify-content-center"
      //         xs={{ span: 5 }}
      //       >
      //         <HomeCarousel />
      //       </Col>
      //       <Col className="h-75 align-items-center" xs={{ span: 4 }}>
      //         <Row className="h-50 mh-50 bg-secondary text-white align-content-center justify-content-center mb-2">
      //           <Col
      //             xs={{ span: 5 }}
      //             style={{
      //               background: `url(${cat_img1})`,
      //               backgroundPosition: "center",
      //               backgroundSize: "100% 100%",
      //               backgroundRepeat: "no-repeat",
      //               backgroundAttachment: "local",
      //             }}
      //           ></Col>
      //           <Col
      //             xs={{ span: 5 }}
      //             style={{
      //               background: `url(${cat_img1})`,
      //               backgroundPosition: "center",
      //               backgroundSize: "100% 100%",
      //               backgroundRepeat: "no-repeat",
      //               backgroundAttachment: "local",
      //             }}
      //           ></Col>
      //         </Row>
      //         <Row
      //           className="h-50 mh-50 bg-info align-content-center justify-content-center"
      //           style={{
      //             background: `url(${gs_img1})`,
      //             backgroundPosition: "center",
      //             backgroundSize: "100% 100%",
      //             backgroundRepeat: "no-repeat",
      //             backgroundAttachment: "local",
      //           }}
      //           onClick={() => this.setState({ modalShow: true })}
      //         ></Row>
      //       </Col>
      //     </Row>
      //   </Container>
    );
  }
}

export default Home;
