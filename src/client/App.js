import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/home/home";
import About from "./components/about/about";
import Auth from "./components/auth/authentication";
import Footer from "./components/footer/footer";
import Catalog from "./components/catalog/catalog";
import CourseDetail from "./components/course/course-detail";
import Classroom from "./components/classroom/classroom";
import ProfileRoute from "./components/route/profileRoute";
import "./app.css";

export default class App extends Component {
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
            <Route path="/classroom" component={Classroom} />
            <Route path="/portfolio" component={ProfileRoute} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}
