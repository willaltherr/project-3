import React, { Component } from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../jumbotron/Jumbotron";
import "../jumbotron/Jumbotron.css"
import Steps from "../layout/Steps";


class Landing extends Component {
  render() {
    return (
      <div>

        <div style={{ height: "100%", width: "100vw"}} className="container valign-wrapper col s12">
            <div className="JumboDiv"></div>
            <br />
                <Jumbotron>
                </Jumbotron>
            </div>          

      
            <div className = "StepsDiv">
                <Steps id={'steps'}>

                </Steps>
            </div>

      </div>
    );
  }
}





export default Landing;
