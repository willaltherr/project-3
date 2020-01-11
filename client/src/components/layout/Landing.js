import React, { Component } from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../jumbotron/Jumbotron";


class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh"}} className="container valign-wrapper">
          <div className="JumboDiv"></div>
            <br />
           <Jumbotron>
          <img src ="https://media.giphy.com/media/3ohzdYnPyEiKF74r3G/giphy.gif" alt="balls"></img>
           </Jumbotron>
  
      </div>
    );
  }
}

export default Landing;
