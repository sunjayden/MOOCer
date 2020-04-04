import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import LoginRegisterModal from "./login-register";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
    };
  }
  // this.state = {
  //   modalShow: false,
  // };
  render() {
    return (
      <Navbar className="Nav w-100 h-100" bg="primary" variant="dark">
        <Navbar.Brand href="#home">MOOCer</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#catalog">Catalog</Nav.Link>
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
    );
  }
}
export default Navigation;
