import React, { Component } from "react";
import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from 'react-router-dom'
import Logo from "./imgs/logo.png";
import "./navigation.css"

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar collapseOnSelect bg="light" variant="light">
        <Navbar.Brand href="/">
          <img
            alt=""
            src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          MOOCer
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/overview">Overview</Nav.Link>
            <NavDropdown title="Programs" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="vl"></div>
          <Nav.Link className="nav-button" href="/auth?q=login">
            <Button className="login-button" variant="outline-primary">Log In</Button>
          </Nav.Link>
          <Nav.Link className="nav-button" href="/auth?q=signup">
            <Button className="signup-button">Sign Up</Button>
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
