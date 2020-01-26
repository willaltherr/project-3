import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import "./Navbar.css";

class Navbar2 extends Component {
  render() {
    return (
      <div className="nav-wrapper">
      <Navbar collapseOnSelect expand="lg" bg="dark-2" variant="dark">
        <Navbar.Brand href="/" img="/images/logo.jpg">
          <img style= {{}}src="/images/logo.jpg"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <button className="btn-sm">
            <Nav.Link style={{ fontFamily: "monospace", color:"#151D2E", fontSize:"110%"}} eventKey="1" as={Link} to="/login">LOGIN HERE</Nav.Link>
            </button>
            <button className="btn-sm">
            <Nav.Link style={{ fontFamily: "monospace", color:"#151D2E"}} eventKey="2" as={Link} to="/register">REGISTER HERE</Nav.Link>
            </button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
      // <div className="navbar">
      //   <nav className="z-depth-0">
      //     <div className="nav-wrapper">
      //       <Link
      //         to="/"
      //         style={{
      //           fontFamily: "monospace"
      //         }}
      //         className="col s5 brand-logo center"
      //       >
      //         <img src="/images/logo.jpg"></img>
      //       </Link>
      //       <button
      //           href="/login"
      //           style={{
      //             marginLeft:"10px",
      //             width: "90px",
      //             borderRadius: "3px",
      //             letterSpacing: "1.5px"
      //           }}
      //           className="btn btn-large btn-flat waves-effect white black-text"
      //         >
      //           Log In
      //         </button>
           
      //         <button
      //           to="/register"
      //           style={{
      //             marginLeft: "15px",
      //             width: "90px",
      //             borderRadius: "3px",
      //             letterSpacing: "1.5px"
      //           }}
      //           className="btn btn-large waves-effect waves-light non-hoverable black-text"
      //         >
      //           Register
      //         </button>
      //     </div>
      //   </nav>
      // </div>
    );
  }
}

export default Navbar2;
