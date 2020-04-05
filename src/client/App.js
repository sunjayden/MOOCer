import React, { Component } from "react";
import "./app.css";
import { BrowserRouter, Route } from "react-router-dom";

import Main from "./components/app-main";
import Catalog from "./components/catalog";

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch("/api/getUsername")
      .then((res) => res.json())
      .then((user) => this.setState({ username: user.username }));
  }

  render() {
    return (
      <BrowserRouter basename="/">
        <Catalog />
      </BrowserRouter>
    );
  }
}
