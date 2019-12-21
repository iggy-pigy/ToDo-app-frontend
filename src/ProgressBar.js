import React from "react";
import styled from "styled-components";

const Track = styled.div`
  max-width: 70%;
  width: 1000px;
  height: 20px;
  background-color: #ffb5fc;
  border-radius: 10px;
  margin: 0px 10px 80px 10px;
`;

const ProgressInTracker = styled.div`
  width: ${props => props.percentage}%;
  height: 100%;
  background-color: #007bff;
  border-radius: 8px;
`;

class ProgressBar extends React.Component {
  render() {
    return (
      <div>
        <h4>Progress</h4>
        <Track className="track">
          <ProgressInTracker percentage={this.props.percentage} />
        </Track>
      </div>
    );
  }
}

export default ProgressBar;
