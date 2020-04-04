import React, { Component } from "react";
import "/Users/yulil/Desktop/MOOCer/node_modules/bootstrap/dist/css/bootstrap.min.css";
import ReactImage from "./react.png";
import Navigation from "./components/navigation";
import Home from "./components/home";
import Footer from "./components/footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch("/api/getUsername")
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <div style={{ height: "100vh", width: "100vw" }} className="app">
        <Container fluid className="main h-100">
          <Row xs={12} className="nav p-0 border-0" style={{ height: "7%" }}>
            <Col className="p-0 border-0">
              <Navigation />
            </Col>
          </Row>

          <Row xs={12} className="main p-0 border-0" style={{ height: "86%" }}>
            <Col className="p-0 border-0">
              <Home />
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
