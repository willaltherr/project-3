import React, { Component } from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../jumbotron/Jumbotron";
import "../jumbotron/Jumbotron.css"


class Landing extends Component {
  render() {
    return (
      <div style={{ height: "100%", width: "100vw"}} className="container valign-wrapper col s12">
      <div className="JumboDiv"></div>
            <br />
           <Jumbotron>
           </Jumbotron>
      </div>
    );
  }
}





export default Landing;
