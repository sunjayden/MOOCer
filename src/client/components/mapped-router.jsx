import React, { Component } from "react";
import CourseDetail from "./course-detail";
import Catalog from "./catalog";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class CatalogRouter extends Component {
  state = {};
  render() {
    const { match } = this.props;
    return (
      <Switch>
        <Route path={`${match.url}/:courseid`} component={CourseDetail}></Route>
        {/* not found page */}
        <Route exact component={Catalog}></Route>
      </Switch>
    );
  }
}

export default CatalogRouter;
