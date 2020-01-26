import React from "react";
import "./Steps.css";

function Steps({ children }) {
  return (
    <div className="steps" id="steps"style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
          <div>
                <p>
                    <img className="step1" src="/images/step1.jpg"/>
                </p>
          </div>

          <div>
                <p>
                    <img className="step2" src="/images/step2.jpg"/>
                </p>
          </div>

          <div >
                <p>
                    <img className="step3" src="images/step3.jpg"/>
                </p>
          </div>  
            <br></br><br></br>
    </div>
   
  );
}

export default Steps;