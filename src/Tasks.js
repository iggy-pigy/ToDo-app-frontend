import React from "react";
import "./Tasks.css";

class Tasks extends React.Component {
  handleDelete = () => {
    this.props.deleteTaskFunc(this.props.id);
  };

  render() {
    return (
      <div className="row">
        <div className="col-6">
          <p>{this.props.task}</p>
        </div>
        <div className="col-6">
          {this.props.done === true ? (
            <button onClick={this.handleDelete} className="button">
              Delete
            </button>
          ) : (
            <button className="button">Done</button>
          )}
        </div>
      </div>
    );
  }
}

export default Tasks;
