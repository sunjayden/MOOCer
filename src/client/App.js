import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/home/app-main";
import About from "./components/about/about";
import Auth from "./components/auth/authentication";
import Footer from "./components/footer/footer";
import Catalog from "./components/catalog/catalog";
import CourseDetail from "./components/course/course-detail";
import Profile from "./components/profile/profile";
import EditProfile from "./components/profile/edit-profile";
import "./app.css";

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
            <Route path="/portfolio" component={Profile} />
            <Route path="/edit" component={EditProfile} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}
