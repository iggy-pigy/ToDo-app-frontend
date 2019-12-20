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
    const filteredTask = this.state.task.filter(t => {
      return t.length > 0;
    });
    this.props.addNewTaskFunc(filteredTask);
  };

  render() {
    return (
      <div className="tasks">
        <input
          type="text"
          onChange={this.updateTask}
          value={this.state.task}
          placeholder="Add things to do here"
        />
        <button onClick={this.addTask}>Add</button>
      </div>
    );
  }
}

export default AddTasks;
