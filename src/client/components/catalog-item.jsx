import React, { Component } from "react";
import { Card, ListGroup, ListGroupItem, Button, Media } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import "./catalog-item.css";

class CatalogItem extends Component {
  constructor(props) {
    super(props);
  }

  //destructuring

  render() {
    let level =
      this.props.courseDetail.level.slice(0, 1).toUpperCase() +
      this.props.courseDetail.level.slice(1);
    let price = "";
    if (this.props.courseDetail.isFreeCourse == true) {
      price = "Free";
    }
    return (
      <Media className="course-card">
        <img
          className="mr-3 course-image"
          src={this.props.courseDetail.image}
        />
        <Media.Body>
          <div className="provider">Udacity</div>
          <h3 className="course-title">{this.props.courseDetail.title}</h3>
          <p className="course-summary">
            {this.props.courseDetail.shortSummary}
          </p>
          <p className="course-meta">
            {level} | {this.props.courseDetail.duration} {" | " + price}
          </p>
        </Media.Body>
      </Media>
      // <Container>
      //   <Row>
      //     <Col sm={4}>

      //     </Col>
      //     <Col sm={8}>

      //     </Col>
      //   </Row>
      // </Container>
      // <Card className="course-card">
      //   {/* <Card.Img variant="left" src="https://d20vrrgs8k4bvw.cloudfront.net/images/degrees/nd036/catalog+image+nd036.jpg" /> */}
      //   <Card.Body
      //     style={{
      //       backgroundColor: this.props.index % 2 == 0 ? "#c3ccd3" : "#f6f8fa",
      //     }}
      //   >
      //     <Card.Title
      //       style={{
      //         color: this.props.index % 2 == 0 ? "#FFFFFF" : "#47646f",
      //       }}
      //     >
      //       {this.props.courseDetail.title}
      //     </Card.Title>

      //     <Card.Text
      //       style={{ color: this.props.index % 2 == 0 ? "#f6f8fa" : "#8ea6b2" }}
      //     >
      //       {this.props.courseDetail.shortSummary}
      //     </Card.Text>

      //     <ListGroup
      //       className="list-group-flush"
      //       style={{
      //         backgroundColor:
      //           this.props.index % 2 == 0 ? "#c3ccd3" : "#f6f8fa",
      //       }}
      //     >
      //       <ListGroupItem
      //         style={{
      //           color: this.props.index % 2 == 0 ? "#f6f8fa" : "#8ea6b2",
      //           backgroundColor:
      //             this.props.index % 2 == 0 ? "#c3ccd3" : "#f6f8fa",
      //         }}
      //       >
      //         Duration: {this.props.courseDetail.duration}
      //       </ListGroupItem>

      //       <ListGroupItem
      //         style={{
      //           color: this.props.index % 2 == 0 ? "#f6f8fa" : "#8ea6b2",
      //           backgroundColor:
      //             this.props.index % 2 == 0 ? "#c3ccd3" : "#f6f8fa",
      //         }}
      //       >
      //         Level: {this.props.courseDetail.level}
      //       </ListGroupItem>
      //     </ListGroup>
      //     <Button
      //       style={{
      //         float: "right",
      //         color: this.props.index % 2 == 0 ? "#8ea6b2" : "#f6f8fa",
      //         backgroundColor:
      //           this.props.index % 2 == 0 ? "#f6f8fa" : "#c3ccd3",

      //         outlineColor: "none",
      //         marginTop: "10px",
      //       }}
      //     >
      //       Detail
      //     </Button>
      //   </Card.Body>
      // </Card>
    );
  }
}

export default CatalogItem;
