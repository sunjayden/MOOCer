import React, { Component } from "react";
import "./app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/app-main";
import Catalog from "./components/catalog";
import About from "./components/about";
import Nav from "./components/navigation";
import Footer from "./components/footer";

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch("/api/getUsername")
      .then((res) => res.json())
      .then((user) => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/catalog" component={Catalog} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}