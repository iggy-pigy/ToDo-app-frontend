import React from "react";
import "./Gherkin.css";
import gherkin from "./docs/giphy.gif";

class Gherkin extends React.Component {
  render() {
    return (
      <div className="Gherkin">
        <img
          src={gherkin}
          alt="Dancing-gherkin"
          style={{ width: 150, height: 150 }}
        />
      </div>
    );
  }
}

export default Gherkin;
