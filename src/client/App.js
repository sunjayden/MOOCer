import React, { Component } from "react";
import "./app.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import CourseDetail from "./components/course-detail";

import Home from "./components/app-main";
import About from "./components/about";
import Nav from "./components/navigation";
import Auth from "./components/authentication";
import Footer from "./components/footer";
import Catalog from "./components/catalog";

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
      <div className="App">
        <script src="./static/bundle.js"></script>
        <Nav />
        {/* BrowserRouter, Route  */}
        <BrowserRouter>
          <Switch>
            <Route exact={true} path="/" exact component={Home} />
            <Route exact={true} path="/about" component={About} />
            <Route
              exact={true}
              strict={true}
              path="/catalog"
              component={Catalog}
            />
            <Route exact={true} path="/catalog/:id" component={CourseDetail} />
            {/* <Route
              exact={true}
              path="/catalog/:courseid"
              component={CourseDetail}
            ></Route> */}
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}
