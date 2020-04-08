import React, { Component } from "react";
import { Container, Row, Col, Button, Card, Alert } from "react-bootstrap";
import { ArrowRight, ArrowLeft } from "react-bootstrap-icons";
import DatePicker from "react-datepicker";
import { TextField } from "@material-ui/core";

class AddSchool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      school: "",
      degree: "",
      major: "",
      // need to fix date stuff
      // startDate: "Jan 12,2019",
      // endDate: "Feb 18, 2020",
      startDate: new Date(),
      endDate: new Date(),
      badSchool: false,
      badDegree: false,
      badMajor: false,
      badStartDate: false,
      badEndDate: false,
    };
  }
  sendData = () => {
    this.props.parentDataCallback({
      school: this.state.school,
      degree: this.state.degree,
      major: this.state.major,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
    });
    // this.setState({
    //   showGood: true,
    // });
    // setTimeout(() => {
    //   this.setState({ showGood: false });
    // }, 5000);
  };

  onSubmit = () => {
    console.log(this.state.startDate);
    console.log(this.state.endDate);
    console.log(this.state.description);
    if (this.state.school == "") {
      this.setState({
        badSchool: true,
      });
      this.dissmissSchoolAlert();
    } else if (this.state.degree == "") {
      this.setState({
        badDegree: true,
      });
      this.dissmissDegreeAlert();
    } else if (this.state.major == "") {
      this.setState({
        badMajor: true,
      });
      this.dissmissMajorAlert();
    } else if (this.state.startDate == "") {
      this.setState({
        badStartDate: true,
      });
      this.dissmissStartDateAlert();
    } else if (this.state.endDate == "") {
      this.setState({
        badEndDate: true,
      });
      this.dissmissEndDateAlert();
    } else {
      this.sendData();
    }
  };

  dissmissSchoolAlert() {
    setTimeout(() => {
      this.setState({ badSchool: false });
    }, 5000);
  }
  dissmissDegreeAlert() {
    setTimeout(() => {
      this.setState({ badDegree: false });
    }, 5000);
  }
  dissmissMajorAlert() {
    setTimeout(() => {
      this.setState({ badMajor: false });
    }, 5000);
  }
  dissmissStartDateAlert() {
    setTimeout(() => {
      this.setState({ badStartDate: false });
    }, 5000);
  }
  dissmissEndDateAlert() {
    setTimeout(() => {
      this.setState({ badEndDate: false });
    }, 5000);
  }

  schoolChange = (event) => {
    this.setState({
      school: event.target.value,
    });
  };
  degreeChange = (event) => {
    this.setState({
      degree: event.target.value,
    });
  };
  majorChange = (event) => {
    this.setState({
      major: event.target.value,
    });
  };
  startDateChange = (date) => {
    this.setState({
      startDate: date,
    });
  };
  endDateChange = (date) => {
    this.setState({
      endDate: date,
    });
    console.log(this.state.endDate);
  };
  descriptionChange = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  render() {
    return (
      <Container>
        {this.state.badSchool ? (
          <Alert variant="danger">Must enter a school!</Alert>
        ) : null}
        {this.state.badDegree ? (
          <Alert variant="danger">Must enter a degree!</Alert>
        ) : null}
        {this.state.badMajor ? (
          <Alert variant="danger">Must enter a major!</Alert>
        ) : null}
        {this.state.badStartDate ? (
          <Alert variant="danger">Must select a start date!</Alert>
        ) : null}
        {this.state.badEndDate ? (
          <Alert variant="danger">Must select a end date!</Alert>
        ) : null}

        <Row className="mt-3">
          <Col xs={12}>
            <TextField
              required
              id="schoool"
              label="School"
              type="text"
              fullWidth
              variant="outlined"
              onChange={() => this.schoolChange(event)}
            />
          </Col>
        </Row>

        <Row className="mt-3">
          <Col xs={6}>
            <TextField
              required
              id="degree"
              label="Degree"
              fullWidth
              variant="outlined"
              onChange={() => this.degreeChange(event)}
            />
          </Col>
          <Col xs={6}>
            <TextField
              required
              id="major"
              label="Major"
              fullWidth
              variant="outlined"
              onSelect={() => this.majorChange(event)}
            />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col xs={6}>
            <Row>
              <Col>Start Date</Col>
            </Row>
            <Row>
              <Col>
                <DatePicker
                  dateFormat="MM yyyy"
                  selected={this.state.endDate}
                  onSelect={(date) => this.endDateChange(date)}
                />
              </Col>
            </Row>
          </Col>
          <Col xs={6}>
            <Row>
              <Col>End Date</Col>
            </Row>
            <Row>
              <Col>
                <DatePicker
                  dateFormat="MM yyyy"
                  selected={this.state.endDate}
                  onChange={(date) => this.endDateChange(date)}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="justify-content-end mt-3">
          <Button className="mr-3" onClick={() => this.onSubmit()}>
            Submit
          </Button>
          <Button onClick={() => this.props.parentCancelCallback()}>
            Cancel
          </Button>
        </Row>
      </Container>
    );
  }
}

export default AddSchool;