import React from "react";
import "./AddTasks.css";

class AddTasks extends React.Component {
  state = {
    task: ""
  };

  updateTask = event => {
    this.setState({
      task: event.target.value
    });
  };

  addTask = () => {
    this.props.addNewTaskFunc(this.state.task);
  };

  render() {
    return (
      <div className="tasks">
        <input
          type="text"
          onChange={this.updateTask}
          value={this.state.task}
          placeholder="Add tasks here"
        />
        <button onClick={this.addTask}>Add</button>
      </div>
    );
  }
}

export default AddTasks;
