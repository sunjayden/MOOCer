import React, { Component } from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Register from "./register";
import Login from "./login";

import style from "./login-register.module.css";

function LoginRegisterModal(props) {
  return (
    <Modal {...props} size="sm" centered>
      <Modal.Title>
        <Tab.Container defaultActiveKey="Login">
          <Row>
            <Col xs={12}>
              <Nav
                variant="tabs"
                className="flex-column text-center "
                style={{
                  backgroundColor: "#47646f",
                  color: "#f6f8fa",
                }}
              >
                <Row>
                  <Col xs={6}>
                    <Nav.Item>
                      <Nav.Link id="registerTab" eventKey="Register">
                        Register
                      </Nav.Link>
                    </Nav.Item>
                  </Col>
                  <Col xs={6}>
                    <Nav.Item>
                      <Nav.Link eventKey="Login" id="loginTab">
                        Login
                      </Nav.Link>
                    </Nav.Item>
                  </Col>
                </Row>
              </Nav>
            </Col>
          </Row>
          <Row>
            <Col>
              <Tab.Content className="align-items-center justify-content-center">
                <Tab.Pane eventKey="Login">
                  <Login onHide={props.onHide} />
                </Tab.Pane>
                <Tab.Pane eventKey="Register">
                  <Register onHide={props.onHide} />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Modal.Title>
    </Modal>
  );
}

export default LoginRegisterModal;
