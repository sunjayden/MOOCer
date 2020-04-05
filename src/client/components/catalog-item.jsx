import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";

class CatalogItem extends Component {
  constructor(props) {
    super(props);
  }

  //destructuring

  render() {
    return (
      <Card>
        <Card.Body
          style={{
            backgroundColor: this.props.index % 2 == 0 ? "#c3ccd3" : "#f6f8fa",
          }}
        >
          <Card.Title
            style={{
              color: this.props.index % 2 == 0 ? "#FFFFFF" : "#47646f",
            }}
          >
            {this.props.courseDetail.title}
          </Card.Title>

          <Card.Text
            style={{ color: this.props.index % 2 == 0 ? "#f6f8fa" : "#8ea6b2" }}
          >
            {this.props.courseDetail.shortSummary}
          </Card.Text>

          <ListGroup
            className="list-group-flush"
            style={{
              backgroundColor:
                this.props.index % 2 == 0 ? "#c3ccd3" : "#f6f8fa",
            }}
          >
            <ListGroupItem
              style={{
                color: this.props.index % 2 == 0 ? "#f6f8fa" : "#8ea6b2",
                backgroundColor:
                  this.props.index % 2 == 0 ? "#c3ccd3" : "#f6f8fa",
              }}
            >
              Duration: {this.props.courseDetail.duration}
            </ListGroupItem>

            <ListGroupItem
              style={{
                color: this.props.index % 2 == 0 ? "#f6f8fa" : "#8ea6b2",
                backgroundColor:
                  this.props.index % 2 == 0 ? "#c3ccd3" : "#f6f8fa",
              }}
            >
              Level: {this.props.courseDetail.level}
            </ListGroupItem>
          </ListGroup>
          <Button
            style={{
              float: "right",
              // backgroundColor: "#8ea6b2",

              color: this.props.index % 2 == 0 ? "#8ea6b2" : "#f6f8fa",
              backgroundColor:
                this.props.index % 2 == 0 ? "#f6f8fa" : "#c3ccd3",

              outlineColor: "none",
              marginTop: "10px",
            }}
            // variant="primary"
          >
            Detail
          </Button>
          {/* <a href="#" style={{ float: "right" }}>
          <span className="glyphicon glyphicon-plus"></span>
          </a> */}
        </Card.Body>
      </Card>
    );
  }
}

export default CatalogItem;
