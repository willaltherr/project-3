import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper">
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center"
            >
<<<<<<< HEAD
              <img src="https://files.slack.com/files-pri/TLHKR9MUG-FS9U62QRY/local_lotto.jpg"></img>
=======
              Local-Lotto
>>>>>>> b624f41a4363e0974cb5248eb35e8d998298b7c1
            </Link>
            <Link
                to="/login"
                style={{
                  marginLeft:"10px",
                  width: "90px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
           
              <Link
                to="/register"
                style={{
                  marginLeft: "15px",
                  width: "90px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable black-text"
              >
                Register
              </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
