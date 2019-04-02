import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateJob from "./components/create-job.component";
import EditJob from "./components/edit-job.component";
import JobsList from "./components/jobs-list.component";

import logo from "./logo.png";
import linkedin from "./linkedin.png";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">

          <nav class="mb-1 navbar navbar-expand-lg navbar-dark default-color">
            
            <Link to="/">
            <a className="navbar-brand">
              <img src={logo} width="185" height="auto" />
            </a>
            </Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
              aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <Link to="/news" className="navbar-brand">Search Jobs</Link>
                </li>
                <li class="nav-item">
                  <Link to="/" className="nav-link">Jobs Applied</Link>
                </li>
                <li class="nav-item">
                  <Link to="/create" className="nav-link">Add a Job</Link>
                </li>
              </ul>
              <ul class="navbar-nav ml-auto nav-flex-icons">
                <li class="nav-item">
                  <a class="nav-link waves-effect waves-light" href="http://www.linkedin.com" target="_blank" >
                    <img src={linkedin} width="55px" height="auto" />
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link waves-effect waves-light">
                    <i class="fab fa-google-plus-g"></i>
                  </a>
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