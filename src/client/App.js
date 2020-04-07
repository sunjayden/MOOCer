import React, { Component } from "react";
import "./app.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/app-main";
import About from "./components/about";
import Auth from "./components/authentication";
import Footer from "./components/footer";
import Catalog from "./components/catalog";
import CourseDetail from "./components/course-detail";

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch("/api/getUsername")
      .then((res) => res.json())
      .then((user) => this.setState({ username: user.username }));
  }

  render() {
    return (
      <div className="App" style={{ width: "100%", height: "100%" }}>
        <BrowserRouter>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/auth" component={Auth} />
            <Route exact={true} path="/overview" component={About} />
            <Route exact={true} path="/course/:id" component={CourseDetail} />
            <Route path="/catalog" component={Catalog} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}
