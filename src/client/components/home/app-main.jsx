import React, { Component } from "react";
import Home from "./home";
import Container from "react-bootstrap/Container";
import Nav from "../header/navigation";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  state = {};
  render() {
    return (
      <>
      <Nav />
      <div
        style={{
          height: "100vh",
          width: "100vw",
          // background: `url(${bg_img})`,
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "local",
        }}
        className="app"
      >
        <Container fluid className="main h-100">
          <Home />
        </Container>
      </div>
      </>
    );
  }
}

export default Main;
