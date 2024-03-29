import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MetroDashboard from "./MetroDashboard";
import "./assets/common/default.css";
import "./assets/common/loader.css";
import "./assets/common/helper.css";

class Routes extends Component {
  state = {};
  
  render() {
    return (
        <Router>
          <Route exact path="/" component={MetroDashboard} />
        </Router>
    );
  }
}

export default Routes;
