import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeCarousel from "./home-carousel";
import cat_img1 from "./imgs/catalog_1.png";
import gs_img1 from "./imgs/get_started.png";
import LoginRegisterModal from "./login-register";

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
      <Container fluid className="h-100">
        <Row className="h-100 align-items-center justify-content-center">
          <Col
            className="h-75 bg-info mr-2 align-items-center justify-content-center"
            xs={{ span: 5 }}
          >
            <HomeCarousel />
          </Col>
          <Col className="h-75 align-items-center" xs={{ span: 4 }}>
            <Row
              className="h-50 mh-50 bg-secondary text-white align-content-center justify-content-center mb-2"
              style={{
                background: `url(${cat_img1})`,
                backgroundPosition: "center",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "local",
              }}
            ></Row>
            <Row
              className="h-50 mh-50 bg-info align-content-center justify-content-center"
              style={{
                background: `url(${gs_img1})`,
                backgroundPosition: "center",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "local",
              }}
              onClick={() => this.setState({ modalShow: true })}
            ></Row>
            <LoginRegisterModal
              show={this.state.modalShow}
              onHide={() => this.setState({ modalShow: false })}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
