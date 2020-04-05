import React, { Component } from "react";
import home_img1 from "./imgs/carousel1.png";
import Row from "react-bootstrap/Row";
import home_img2 from "./imgs/carousel2.png";
import home_img3 from "./imgs/carousel3.png";
import Carousel from "react-bootstrap/Carousel";

class HomeCarousel extends Component {
  state = {};
  render() {
    return (
      <Row className="h-100 justify-content-center align-content-center">
        <Carousel
          className="h-100"
          controls={false}
          indicators={false}
          style={{
            overflow: "hidden",
          }}
        >
          <Carousel.Item className="h-100">
            <img
              className="d-block h-100 mw-100"
              src={home_img1}
              alt="Catalog Slide"
            />
            <Carousel.Caption>
              <a href="#about" className="text-white font-weight-bold">
                <h3>About</h3>
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="h-100">
            <img
              className="d-block h-100 mw-100"
              src={home_img2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <a
                href="#catalog"
                className="text-white font-weight-bold align-content-center"
              >
                <h3>Catalog</h3>
              </a>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="h-100">
            <img
              className="d-block h-100  mw-100"
              src={home_img3}
              alt="Second slide"
            />
            <Carousel.Caption>
              <a href="#catalog" className="text-white font-weight-bold">
                <h3>Catalog</h3>
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
    );
  }
}

export default HomeCarousel;
