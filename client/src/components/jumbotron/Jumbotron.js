import React from "react";
import "./Jumbotron.css";
import { Link } from "react-router-dom";

function Jumbotron({ children }) {
  return (
    <div className="jumbotron jumbotron-fluid col s12" style={{ display: "grid", gridTemplateColumns: "20% 60% 20%", gridGap:0 }}>

        <div className="slogan" >
        </div>
      
        <div className="slogan" >
            <h1>The new way to play the Lotto</h1> 
            <h3>Increase your odds, Increase your winnings!</h3>
        </div>

        <div className="slogan" >
        </div>

        <div>
        </div>

        <div className="jumbotron-button">
              
             
              <button variant="primary" size="lg">
                <a href="#steps" style={{color: "#151D2E"}}>Learn More</a>
              </button>
              
              <Link
              to="/login">
              <button variant="secondary" size="lg">
                Play Now
              </button>
              </Link>
        </div>

        <div>
        </div>
    
    </div>
  );
}

export default Jumbotron;