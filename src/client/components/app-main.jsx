import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import LoginRegisterModal from "./login-register";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./home";
import Catalog from "./catalog";
import About from "./about";
import Footer from "./footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import bg_img from "./imgs/bg.png";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Nav from "./navigation";

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
