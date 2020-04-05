import React, { Component } from "react";
import CatalogItem from "./catalog-item";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// onComponentMount(){
// jsonthing = APIrequest # [{},{}], ->[{},{}]
// this.setstate(jsonthing)

// }
class Catalog extends Component {
  componentDidMount() {
    fetch("http://localhost:3000/api/courses")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ courseList: data.courses });
        console.log(this.state.courseList);
      })
      .catch(console.log);
  }

  constructor(props) {
    super(props);
    this.state = {
      courseList: [],
    };
  }

  renderTableData() {
    // console.log(this.state.courseList);
    // <p>{this.state.courseList}</p>;
    // <p>whljaslkdfjklsdfjldsf</p>;

    return this.state.courseList.map((course, index) => {
      return (
        // <tr key={index}>
        // <p>course.summary</p>
        <Row
          className="h-25 p-2 align-items-center justify-content-center"
          key={index}
        >
          <Col
            className="p-0"
            // xs={{ span: 5 }}
          >
            <CatalogItem courseDetail={course} />
          </Col>
        </Row>
      );
    });
  }

  render() {
    return (
      <Container fluid className="h-100 text-center" style={{ width: "90%" }}>
        <h1 id="title" className="text-center" style={{ color: "#47646f" }}>
          Courses
        </h1>
        {/* <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination> */}
        <Container className="overflow-auto" style={{ height: "80%" }}>
          {this.renderTableData()}
        </Container>
      </Container>
    );
  }
}

export default Catalog;
