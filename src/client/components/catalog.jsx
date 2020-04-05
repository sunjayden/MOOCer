import React, { Component } from "react";
import CatalogItem from "./catalog-item";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pagination from "react-bootstrap/Pagination";
// onComponentMount(){
// jsonthing = APIrequest # [{},{}], ->[{},{}]
// this.setstate(jsonthing)

// }
class Catalog extends Component {
  componentDidMount() {
    fetch("http://localhost:3000/api/courses")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          courseList: data.courses,
          current_page: data.page,
          per_page: data.per_page,
          max_page: data.pages,
        });
        console.log(this.state.courseList);
      })
      .catch(console.log);
  }
  constructor(props) {
    super(props);
    this.state = {
      courseList: [],
      per_page: 1,
      max_page: 1,
      current_page: 1,
    };
  }

  renderPagination() {
    let active = this.state.current_page;
    let items = [];
    let start_index = active;
    let end_index = active + 2;
    if (active > 1) {
      items.push(<Pagination.Prev key={active - 1} />);
      items.push(
        <Pagination.Item key={1} style={{ color: "#8ea6b2" }}>
          {1}
        </Pagination.Item>
      );
      if (active - 1 > 1) {
        start_index = active - 1;
      } else if (active - 1 > 2) {
        start_index = active - 1;
        items.push(
          <Pagination.Ellipsis
            key={start_index - 1}
            style={{ color: "#8ea6b2" }}
          />
        );
      }
    }
    if (end_index > this.state.max_page) {
      end_index = this.state.max_page;
    }
    for (let number = start_index; number <= end_index; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>
      );
    }
    if (end_index < this.state.max_page - 2) {
      items.push(<Pagination.Ellipsis key={end_index + 1} />);
    }
    if (end_index < this.state.max_page) {
      items.push(
        <Pagination.Item key={this.state.max_page}>
          {this.state.max_page}
        </Pagination.Item>
      );
      items.push(
        <Pagination.Next
          key={this.state.max_page + 1}
          onClick={this.onClick.bind(this, active + 1)}
        />
      );
    }

    return (
      <div className="mt-2 mr-2 overflow-auto" style={{ float: "right" }}>
        <Pagination>{items}</Pagination>
      </div>
    );
  }

  onClick(pageNumber) {
    this.setState({
      current_page: pageNumber,
    });
  }

  renderTableData() {
    return this.state.courseList.map((course, index) => {
      return (
        <Row className="h-30 pb-2" key={index}>
          {/* <div style={{ visibility: this.state.driverDetails.firstName != undefined? 'visible': 'hidden'}}></div> */}
          <Col>
            <CatalogItem courseDetail={course} index={index} />
          </Col>
        </Row>
      );
    });
  }

  render() {
    return (
      <Container fluid className="h-100" style={{ width: "90%" }}>
        <h1 id="title" className="text-center" style={{ color: "#47646f" }}>
          Courses
        </h1>

        <Container className="overflow-auto" style={{ height: "80%" }}>
          {this.renderTableData()}
        </Container>
        {this.renderPagination()}
      </Container>
    );
  }
}

export default Catalog;
