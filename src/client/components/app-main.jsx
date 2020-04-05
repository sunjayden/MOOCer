import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import LoginRegisterModal from "./login-register";
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

class Main extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          background: `url(${bg_img})`,
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "local",
        }}
        className="app"
      >
        <Container fluid className="main h-100">
          <Row xs={12} className="nav p-0 border-0" style={{ height: "7%" }}>
            <Col className="p-0 border-0">
              <Navbar
                className="Nav w-100 h-100 text-white"
                style={{ backgroundColor: "#47646f" }}
                variant="dark"
              >
                <Navbar.Brand href="/">MOOCer</Navbar.Brand>
                <Nav className="mr-auto" variant="pills">
                  <NavLink
                    exact={true}
                    className="text-white pr-2 pl-2"
                    to="/"
                    activeStyle={{ textDecoration: "underline" }}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    className="text-white pr-2 pl-2"
                    to="/about"
                    exact={true}
                    activeStyle={{ textDecoration: "underline" }}
                  >
                    About
                  </NavLink>
                  <NavLink
                    exact={true}
                    className="text-white pr-2 pl-2"
                    to="/catalog"
                    activeStyle={{ textDecoration: "underline" }}
                  >
                    Catalog
                  </NavLink>
                </Nav>

                <Form className="navbar-form" role="search">
                  <div className="input-group add-on">
                    <input
                      className="form-control"
                      placeholder="Search"
                      name="srch-term"
                      id="srch-term"
                      type="text"
                    />
                    <div className="input-group-btn">
                      <button className="btn btn-default" type="submit">
                        <i className="glyphicon glyphicon-search"></i>
                      </button>
                    </div>
                    <Button
                      // className="btn btn-secondary"
                      variant="outline-light"
                      onClick={() => this.setState({ modalShow: true })}
                    >
                      Login
                    </Button>
                    <LoginRegisterModal
                      show={this.state.modalShow}
                      onHide={() => this.setState({ modalShow: false })}
                    />
                  </div>
                </Form>
              </Navbar>
            </Col>
          </Row>

          <Row xs={12} className="main p-0 border-0" style={{ height: "86%" }}>
            <Col className="p-0 border-0 h-100">
              <Route exact path="/about" component={About} />
              <Route exact path="/Catalog" component={Catalog} />
              <Route exact path="/" component={Home} />
            </Col>
          </Row>
          <Row xs={12} style={{ height: "7%" }} className="p-0 border-0">
            <Col className="h-100 flex-end" className="p-0">
              <Footer />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Main;
