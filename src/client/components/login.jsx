import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { FormControl } from "@material-ui/core";
import { FormGroup } from "@material-ui/core";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // submitLogin(e) {
  //   console.log("submit login");
  // }

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
            id="login-email"
            label="Email Address"
            name="email"
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
            name="password"
            label="Password"
            type="password"
            id="login-password"
            autoComplete="current-password"
            style={{
              color: "#8ea6b2",
            }}
          />
          <Button
            fullWidth
            variant="contained"
            style={{
              marginTop: "8%",
              backgroundColor: "#8ea6b2",
              color: "#f6f8fa",
            }}
            // onClick={}
            // className={classes.submit}
          >
            Login
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

export default Login;
