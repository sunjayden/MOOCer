import React, { Component, useState } from "react";
import { Button, Nav, Navbar, NavDropdown, Modal, DropdownButton, MenuItem, Dropdown } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { IoMdSettings, IoMdExit } from "react-icons/io";
import { FaRegUserCircle, FaUser } from "react-icons/fa";

import Logo from "../imgs/logo.png";
<<<<<<< HEAD
import {
  getFromStorage, deleteFromStorage
} from "../utils/storage";
import SimpleMenu from "./settings-menu";
import "./navigation.module.css"
=======
import { getFromStorage, deleteFromStorage } from "../utils/storage";
import "./navigation.module.css";
>>>>>>> 844fbb424b36a2401356036c6b99c5f5ea7771b6

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      loggedIn: false,
    };
  }

  componentDidMount() {
    const token = getFromStorage("moocer");
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
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="vl"></div>
          <Nav.Link className="nav-button" href="/auth">
            <Button className="login-button" variant="outline-primary">
              Log In
            </Button>
          </Nav.Link>
          <Nav.Link className="nav-button" href="/auth?q=signup">
            <Button className="signup-button">Sign Up</Button>
          </Nav.Link>
        </Navbar.Collapse>
      );
    };

    let LoggedInNav = () => {
<<<<<<< HEAD
=======
      return (
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/overview">Overview</Nav.Link>
            <Nav.Link href="/catalog">Course Catalog</Nav.Link>
            <Nav.Link href="/overview">My Classroom</Nav.Link>
            <Nav.Link href="/user">Profile</Nav.Link>
          </Nav>
          <div className="vl"></div>
          <SignOutButton />
        </Navbar.Collapse>
      );
    };

    let signoutSubmit = () => {
      this.setState({ loggedIn: false });
      deleteFromStorage("moocer");
    };

    let SignOutButton = () => {
>>>>>>> 844fbb424b36a2401356036c6b99c5f5ea7771b6
      const [show, setShow] = useState(false);

      const handleClose = () => {
        setShow(false);
        signoutSubmit();
      };
      const handleShow = () => setShow(true);

      return (
<<<<<<< HEAD
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/overview">Overview</Nav.Link>
            <Nav.Link href="/catalog">Course Catalog</Nav.Link>
            <Nav.Link href="/overview">My Classroom</Nav.Link>
          </Nav>
          <div className="vl"></div>
=======
        <>
          <Button className="signout-button" onClick={handleShow}>
            Sign Out
          </Button>
>>>>>>> 844fbb424b36a2401356036c6b99c5f5ea7771b6

          <DropdownButton
            key={'down'}
            id={`dropdown-button-drop-left`}
            drop={'down'}
            title={<IoMdSettings />}
          >
            <Dropdown.Item onClick={() => this.props.history.push("/portfolio")}><FaUser /> My Portfolio</Dropdown.Item>
            <Dropdown.Item eventKey="2"><IoMdSettings /> Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleShow}><IoMdExit /> Logout</Dropdown.Item>
          </DropdownButton>
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
<<<<<<< HEAD
        </Navbar.Collapse>
      )
    }

    let signoutSubmit = () => {
      this.setState({ loggedIn: false });
      deleteFromStorage("moocer");
    }
=======
        </>
      );
    };
>>>>>>> 844fbb424b36a2401356036c6b99c5f5ea7771b6

    return (
      <Navbar collapseOnSelect bg="light" variant="light">
        <Navbar.Brand href="/">
          <img
            alt=""
            src={Logo}
            width="35"
            height="35"
            className="d-inline-block align-bottom"
          />{" "}
          MOOCer
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {this.state.loggedIn ? <LoggedInNav /> : <AuthNav />}
      </Navbar>
    );
  }
}

export default withRouter(Navigation);
