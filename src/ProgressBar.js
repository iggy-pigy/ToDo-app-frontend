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
  margin: 0px 15% 80px 15%;
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
  renderEmoji = () => {
    if (this.props.percentage > 0 && this.props.percentage < 30) {
      return <Emoji text="Good job! Keep going!👍" />;
    } else if (this.props.percentage > 30 && this.props.percentage < 100) {
      return <Emoji text="Don't give up! You are coming closer 😉" />;
    } else {
      return <Emoji text="No tasks to do." />;
    }
  };
  render() {
    return (
      <div>
        <p className="text">{this.renderEmoji()}</p>
        <Track className="track">
          <ProgressInTracker percentage={this.props.percentage} />
        </Track>
      </div>
    );
  }
}

export default ProgressBar;
