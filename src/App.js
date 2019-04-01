import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateJob from "./components/create-job.component";
import EditJob from "./components/edit-job.component";
import JobsList from "./components/jobs-list.component";

import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank">
              <img src={logo} width="155" height="auto" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/" className="navbar-brand">Job Application Tracker</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Jobs</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Job</Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/" exact component={JobsList} />
          <Route path="/edit/:id" component={EditJob} />
          <Route path="/create" component={CreateJob} />
        </div>
      </Router>
    );
  }
}

export default App;