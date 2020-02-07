import React from "react";
import "./Tasks.css";

class Tasks extends React.Component {
  handleDeleteTask = () => {
    this.props.deleteTaskFunc(this.props.id);
  };

  handleCompletedTask = () => {
    this.props.completedTaskFunc(this.props.id);
  };

  render() {
    return (
      <div className="row">
        <div className="col-6">
          <p>{this.props.task}</p>
        </div>
        <div className="col-6">
          {this.props.completed === true ? (
            <button onClick={this.handleDeleteTask} className="button">
              Delete
            </button>
          ) : (
            <button onClick={this.handleCompletedTask} className="button">
              Done
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Tasks;
