import React from "react";
import styled from "styled-components";
import Emoji from "react-emoji-render";
import "./ProgressBar.css";

const Track = styled.div`
  max-width: 70%;
  width: 1000px;
  height: 20px;
  background-color: #ffb5fc;
  border-radius: 10px;
  margin: 0px 10px 80px 10px;
  text-align: center;
`;

const ProgressInTracker = styled.div`
  width: ${props => props.percentage}%;
  height: 100%;
  background-color: #007bff;
  border-radius: 8px;
  text-align: center;
`;

class ProgressBar extends React.Component {
  render() {
    return (
      <div>
        <p className="text">
          {this.props.percentage > 50 ? (
            <Emoji text="Good job! Keep going!👍" />
          ) : (
            <Emoji text="Don't give up! You are coming closer 😉" />
          )}
        </p>
        <Track className="track">
          <ProgressInTracker percentage={this.props.percentage} />
        </Track>
      </div>
    );
  }
}

export default ProgressBar;
