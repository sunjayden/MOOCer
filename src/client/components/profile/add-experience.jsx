import React, { Component } from "react";
import { Container, Row, Col, Button, Card, Alert } from "react-bootstrap";
import { ArrowRight, ArrowLeft } from "react-bootstrap-icons";
import DatePicker from "react-datepicker";
import { TextField } from "@material-ui/core";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { FaSadCry } from "react-icons/fa";

class AddExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      company: "",
      startDate: new Date(),
      endDate: new Date(),
      description: "",
      showGood: false,
      badTitle: false,
      badCompany: false,
      badStartDate: false,
      badEndDate: false,
    };
    console.log(this.state);
  }
  sendData = () => {
    this.props.parentDataCallback({
      title: this.state.title,
      company: this.state.company,
      // waiting until fix date stuff
      // startDate: this.state.startDate,
      // endDate: this.state.endDate,
      description: this.state.description,
    });
    this.setState({
      showGood: true,
    });
    setTimeout(() => {
      this.setState({ showGood: false });
    }, 5000);
  };

  onSubmit = () => {
    console.log(this.state.startDate);
    console.log(this.state.endDate);
    console.log(this.state.description);
    if (this.state.title == "") {
      this.setState({
        badTitle: true,
      });
      this.dissmissTitleAlert();
    } else if (this.state.company == "") {
      this.setState({
        badCompany: true,
      });
      this.dissmissCompanyAlert();
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

  dissmissTitleAlert() {
    setTimeout(() => {
      this.setState({ badTitle: false });
    }, 5000);
  }
  dissmissCompanyAlert() {
    setTimeout(() => {
      this.setState({ badCompany: false });
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

  titleChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  companyChange = (event) => {
    this.setState({
      company: event.target.value,
    });
  };
  startDateChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  endDateChange = (date) => {
    // const options = {};
    // console.log(this.state.endDate);
    // console.log(date.getMonth(), date.getYear());
    // _data = date.getMonth() + ", " + date.getYear();
    this.setState({
      endDate: date,
    });
  };
  descriptionChange = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  render() {
    return (
      <Container>
        {this.state.badTitle ? (
          <Alert variant="danger">Must enter a title!</Alert>
        ) : null}
        {this.state.badCompany ? (
          <Alert variant="danger">Must enter a company!</Alert>
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
              id="jobTitle"
              label="Job Title"
              type="text"
              fullWidth
              variant="outlined"
              onChange={() => this.titleChange(event)}
            />
          </Col>
        </Row>

        <Row className="mt-3">
          <Col xs={12}>
            <TextField
              required
              id="company"
              label="Company"
              fullWidth
              variant="outlined"
              onChange={() => this.companyChange(event)}
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
                  dateFormat="MMMM d, yyyy"
                  selected={this.state.startDate}
                  onSelect={(date) => this.startDateChange(date)}
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
                  dateFormat="MMMM d, yyyy"
                  selected={this.state.endDate}
                  onSelect={(date) => this.endDateChange(date)}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        {/* <Row>
          <Col xs={6}>my currently working in this role with a selector</Col>
        </Row> */}
        <Row className="mt-3">
          <Col>
            <TextField
              required
              id="description"
              label="Description"
              fullWidth
              variant="outlined"
              onChange={() => this.descriptionChange(event)}
            />
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

export default AddExperience;
