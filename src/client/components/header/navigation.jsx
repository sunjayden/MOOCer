import React, { Component, useState } from "react";
import { Button, Nav, Navbar, NavDropdown, Modal } from "react-bootstrap";
import { withRouter } from "react-router-dom";

// import Logo from "../imgs/logo.png";
import {
  getFromStorage, deleteFromStorage
} from "../utils/storage";
import "./navigation.module.css"

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      loggedIn: false
    }
  }

  componentDidMount() {
    const token = getFromStorage("moocer")
    if (token) {
      this.setState({ loggedIn: true });
    }
  }

  render() {
    let AuthNav = () => {
      return (
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
          <Nav.Link className="nav-button" href="/auth">
            <Button className="login-button" variant="outline-primary">Log In</Button>
          </Nav.Link>
          <Nav.Link className="nav-button" href="/auth?q=signup">
            <Button className="signup-button">Sign Up</Button>
          </Nav.Link>
        </Navbar.Collapse>
      )
    }

    let LoggedInNav = () => {
      return (
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/overview">Overview</Nav.Link>
            <Nav.Link href="/catalog">Course Catalog</Nav.Link>
            <Nav.Link href="/overview">My Classroom</Nav.Link>
          </Nav>
          <div className="vl"></div>
          <SignOutButton />
        </Navbar.Collapse>
      )
    }

    let signoutSubmit = () => {
      this.setState({ loggedIn: false });
      deleteFromStorage("moocer");
    }

    let SignOutButton = () => {
      const [show, setShow] = useState(false);

      const handleClose = () => {
        setShow(false);
        signoutSubmit();
      };
      const handleShow = () => setShow(true);

      return (
        <>
          <Button className="signout-button" onClick={handleShow}>Sign Out</Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Sign Out</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you have succesfully sign out!</Modal.Body>
            <Modal.Footer>
              <Button variant="primary" href="/" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }

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
        {this.state.loggedIn ? <LoggedInNav /> : <AuthNav />}
      </Navbar>
    );
  }
}

export default withRouter(Navigation);