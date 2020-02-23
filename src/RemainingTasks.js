import React from "react";
import "./RemainingTasks.css";

class RemainingTasks extends React.Component {
  render() {
    return (
      <p className="paragraph">
        Uncompleted tasks: <span>{this.props.count}</span>
      </p>
    );
  }
}

export default RemainingTasks;
