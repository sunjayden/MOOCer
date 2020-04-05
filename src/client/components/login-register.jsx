import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

function LoginRegisterModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header> */}
      <Modal.Body>
        <Tab.Container defaultActiveKey="Login">
          <Row>
            <Col xs={12}>
              <Nav
                variant="pills"
                className="flex-column text-center "
                // style={{ backgroundColor: "#47646f" }}
              >
                <Row>
                  <Col xs={6}>
                    <Nav.Item>
                      <Nav.Link eventKey="Register">Register</Nav.Link>
                    </Nav.Item>
                  </Col>
                  <Col xs={6}>
                    <Nav.Item>
                      <Nav.Link eventKey="Login">Login</Nav.Link>
                    </Nav.Item>
                  </Col>
                </Row>
              </Nav>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Tab.Content>
                <Tab.Pane eventKey="Register">
                  <Form className="mt-5">
                    <Form.Group controlId="registerName">
                      <Form.Row className="justify-content-center">
                        <Form.Label column xs={2}>
                          Full Name
                        </Form.Label>
                        <Col xs={8}>
                          <Form.Control type="text" placeholder="Full Name" />
                        </Col>
                      </Form.Row>
                    </Form.Group>

                    <Form.Group controlId="registerEmail">
                      <Form.Row className="justify-content-center">
                        <Form.Label column xs={2}>
                          Email
                        </Form.Label>
                        <Col xs={8}>
                          <Form.Control type="text" placeholder="Email" />
                        </Col>
                      </Form.Row>
                    </Form.Group>

                    <Form.Group controlId="registerPassword">
                      <Form.Row className="justify-content-center">
                        <Form.Label column xs={2}>
                          Password
                        </Form.Label>
                        <Col xs={8}>
                          <Form.Control type="text" placeholder="Password" />
                        </Col>
                      </Form.Row>
                    </Form.Group>

                    <Form.Group controlId="registerButton">
                      <Form.Row className="justify-content-center">
                        <Button variant="primary" type="submit">
                          Register
                        </Button>
                      </Form.Row>
                    </Form.Group>
                  </Form>
                </Tab.Pane>

                <Tab.Pane eventKey="Login">
                  <Form className="mt-5">
                    <Form.Group controlId="loginEmail">
                      <Form.Row className="justify-content-center">
                        <Form.Label column xs={2}>
                          Email
                        </Form.Label>
                        <Col xs={8}>
                          <Form.Control type="text" placeholder="Email" />
                        </Col>
                      </Form.Row>
                    </Form.Group>

                    <Form.Group controlId="loginPassword">
                      <Form.Row className="justify-content-center">
                        <Form.Label column xs={2}>
                          Password
                        </Form.Label>
                        <Col xs={8}>
                          <Form.Control type="text" placeholder="Password" />
                        </Col>
                      </Form.Row>
                    </Form.Group>

                    <Form.Group controlId="signInButton">
                      <Form.Row className="justify-content-center">
                        <Button variant="primary" type="submit">
                          Login
                        </Button>
                      </Form.Row>
                    </Form.Group>
                  </Form>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LoginRegisterModal;
