import React, { Component } from "react";
import StarRatings from "react-star-ratings";
import { ListGroup, Container, Row, Col, Card } from "react-bootstrap";
import { ArrowRight, ArrowLeft } from "react-bootstrap-icons";

const flexContainer = {
  display: "flex",
  flexDirection: "row",
  padding: 0,
};

class Reviews extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      courseId: this.props.courseId,
      reviews: [],
      limit: 3,
      currentPage: 1,
      maxPage: 1,
      avgRating: 0,
    };
  }
  componentDidMount() {
    this._isMounted = true;
    this.loadPage();
  }

  getReviewPage(pageNumber) {
    this.setState(
      {
        currentPage: pageNumber,
      },
      () => this.loadPage()
    );
  }

  loadPage() {
    let url = `http://localhost:3000/api/reviews?courseId=${this.state.courseId}&perPage=${this.state.limit}&page=${this.state.currentPage}`;

    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        if (this._isMounted) {
          this.setState({
            reviews: data.reviews,
            // currentPage: data.page,
            maxPage: data.pages,
            avgRating: data.avg_rating,
          });
        }
      })
      .catch((error) => console.log(error));
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  renderReviewCardList() {
    return this.state.reviews.map((review, index) => {
      return (
        // console.log(review)
        <ListGroup.Item key={index} className="border-bottom-0">
          <Card
            className="overflow-auto"
            style={{ width: "20rem", height: "18rem" }}
          >
            <Card.Body>
              <Card.Title>
                <Container>
                  <Row>
                    <Col xs={4}>{review.rated_by}</Col>
                    <Col xs={8} className="inline-block float-right">
                      <StarRatings
                        className="ml-auto"
                        rating={review.rating}
                        starRatedColor="yellow"
                        starDimension="23px"
                        starSpacing="1px"
                        numberOfStars={5}
                        name="rating"
                      />
                    </Col>
                  </Row>
                </Container>
              </Card.Title>
              <Card.Text>{review.comment}</Card.Text>
            </Card.Body>
          </Card>
        </ListGroup.Item>
      );
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs={6} className="pl-5">
            <h3>Review </h3>
          </Col>
          <Col xs={6}>
            <Row className="justify-content-end pr-5">
              <StarRatings
                className="float-right"
                rating={this.state.avgRating}
                starRatedColor="yellow"
                starDimension="23px"
                starSpacing="1px"
                numberOfStars={5}
                name="rating"
              />
            </Row>
          </Col>
        </Row>
        <Row>
          <Col cs={12} className="pl-5">
            <h6>Leave a review</h6>
          </Col>
        </Row>
        <Row className="overflow-auto">
          <Col xs={12}>
            <ListGroup
              className="borderless"
              style={flexContainer}
              variant="flush"
            >
              {this.renderReviewCardList()}
            </ListGroup>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col xs={6} className="pl-5">
            <div
              style={{
                visibility: this.state.currentPage > 1 ? "visible" : "hidden",
              }}
            >
              <ArrowLeft
                onClick={() => this.getReviewPage(this.state.currentPage - 1)}
              />
              <h6
                onClick={() => this.getReviewPage(this.state.currentPage - 1)}
              >
                Previous
              </h6>
            </div>
          </Col>
          <Col xs={6} className="pr-5">
            <Row className="justify-content-end">
              <div
                style={{
                  visibility:
                    this.state.currentPage < this.state.maxPage
                      ? "visible"
                      : "hidden",
                }}
              >
                <ArrowRight
                  onClick={() => this.getReviewPage(this.state.currentPage + 1)}
                />
                <h6
                  onClick={() => this.getReviewPage(this.state.currentPage + 1)}
                >
                  Next
                </h6>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Reviews;
