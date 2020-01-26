import React from "react";
import "./Jumbotron.css";
import { Link } from "react-router-dom";

function Jumbotron({ children }) {
  return (
    <div className="jumbotron" style={{ display: "grid", gridTemplateColumns: "20% 60% 20%", gridGap: 20 }}>

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
              <Link
              to="/#steps">
              <button variant="primary" size="lg" block>
                Learn More
              </button>
              </Link>
              <br></br>
              <br></br>
              <Link
              to="/login">
              <button variant="secondary" size="lg" block>
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