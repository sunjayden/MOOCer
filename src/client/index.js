import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Home from "./components/home";
import Catalog from "./components/catalog";
import About from "./components/about";

import { Route, Link, BrowserRouter as Router } from "react-router-dom";
// import Users from './users'
// import Contact from './contact'
// const routing = (
//   <Router>
//     <div>
//       <Route path="/" component={Home} />
//       <Route path="/about" component={About} />
//       <Route path="/catalog" component={Catalog} />
//     </div>
//   </Router>
// );
// ReactDOM.render(routing, document.getElementById("root"));

ReactDOM.render(<App />, document.getElementById("root"));
