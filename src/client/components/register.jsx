import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { FormControl } from "@material-ui/core";
import { FormGroup } from "@material-ui/core";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <FormControl
        required
        style={{
          width: "100%",
          alignItems: "center",
          paddingTop: "2%",
        }}
      >
        <FormGroup>
          <TextField
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth
            id="register-username"
            label="Username"
            name="username"
            type="text"
            autoComplete="username"
            autoFocus={true}
            style={{
              color: "#8ea6b2",
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth
            id="register-email"
            label="Email Address"
            name="email"
            type="email"
            autoComplete="email"
            autoFocus={true}
            style={{
              color: "#8ea6b2",
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required={true}
            fullWidth
            id="register-password"
            label="Password"
            name="password"
            type="password"
            autoFocus={true}
            autoComplete="password"
            style={{
              color: "#8ea6b2",
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{
              marginTop: "8%",
              backgroundColor: "#8ea6b2",
              color: "#f6f8fa",
            }}
          >
            Register
          </Button>
          <Button
            onClick={this.props.onHide}
            fullWidth
            variant="contained"
            style={{
              marginTop: "8%",
              marginBottom: "15%",
              backgroundColor: "#8ea6b2",
              color: "#f6f8fa",
            }}
          >
            Cancel
          </Button>
        </FormGroup>
      </FormControl>
    );
  }
}

export default Register;
