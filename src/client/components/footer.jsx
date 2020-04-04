import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="bg-info text-white d-flex fixed-buttom justify-content-center align-self-center h-100">
        MOOCer 2.0. Made with ❤️ by Jayden Sun and Yuli Liu
      </div>
      // <footer className="bg-info text-white justify-content-center fixed-buttom">
      //   MOOCer 2.0. Made with ❤️ by Jayden Sun and Yuli Liu
      // </footer>
    );
  }
}

export default Footer;
