import React, { Component } from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../jumbotron/Jumbotron";


class Landing extends Component {
  render() {
    return (
      <div style={{ height: "100%", width: "100%"}} className="container valign-wrapper">
      <div className="JumboDiv"></div>
            <br />
           <Jumbotron>
           </Jumbotron>
  
      </div>
    );
  }
}

export default Landing;
