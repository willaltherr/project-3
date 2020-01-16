import React from "react";
import "./Steps.css";

function Steps({ children }) {
  return (
    <div className="steps" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
          <div>
                <p>
                    <img className="step1" src="https://files.slack.com/files-pri/TLHKR9MUG-FSQJ2P31T/step_1.jpg"/>
                </p>
          </div>

          <div>
                <p>
                    <img className="step2" src="https://files.slack.com/files-pri/TLHKR9MUG-FSD419919/step_2.jpg"/>
                </p>
          </div>

          <div >
                <p>
                    <img className="step3" src="https://files.slack.com/files-pri/TLHKR9MUG-FSD41HGUB/step_3.jpg"/>
                </p>
          </div>  

    </div>
  );
}

export default Steps;