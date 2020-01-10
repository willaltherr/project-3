import React, { Component } from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../jumbotron/Jumbotron";


class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh", width: "100vw" }} className="container valign-wrapper">
        <div className="row">
          <div className="JumboDiv"></div>
            <br />
           <Jumbotron>
        
           </Jumbotron>
          
        </div>
      </div>
    );
  }
}

export default Landing;
