import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class CatalogItem extends Component {
  constructor(props) {
    super(props);
    const {
      _id,
      tags,
      degree,
      affiliates,
      duration,
      learning,
      key,
      image,
      level,
      isFreeCourse,
      lessons,
      prerequisite,
      shortSummary,
      url,
      subtitle,
      summary,
      title,
      platform,
      __v,
    } = this.props.courseDetail;
  }

  //destructuring

  render() {
    return (
      <Card>
        {/* <Card.Header>
          {this.title}
        </Card.Header> */}
        <Card.Body>
          <Card.Title>{this.props.courseDetail.title}</Card.Title>
          <Card.Text>{this.props.courseDetail.shortSummary}</Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    );
  }
}

export default CatalogItem;
