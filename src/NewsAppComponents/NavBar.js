import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      
      <div>
        <div className="container text-center">
          <a className="navbar-brand" href="/">
            News Monkey - Powered by News API and React
          </a>
        </div>
        <nav className={`navbar navbar-expand-lg navbar-light bg-light`}>
          <div className="container-fluid">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent" >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">General</Link>
                </li>               
                <li className="nav-item active"><Link className="nav-link" to="/sports">Sports</Link>
                </li>
                 <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item"><Link className="nav-link" to="/health">Health</Link>
                </li>
                <li className="nav-item active"><Link className="nav-link" to="/science">Science</Link>
                </li>
                <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
