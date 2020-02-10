import React from "react";
import uuid from "uuid/v4";
import axios from "axios";
import Header from "./Header";
import AddTasks from "./AddTasks";
import RemainingTasks from "./RemainingTasks";
import ProgressBar from "./ProgressBar";
import Tasks from "./Tasks";
import Gherkin from "./Gherkin";

import "./App.css";

class App extends React.Component {
  state = {
    taskList: []
  };

  componentDidMount() {
    axios
      .get("https://gbrvvbp9nc.execute-api.eu-west-1.amazonaws.com/dev/tasks")
      .then(response => {
        const taskList = response.data.tasks;
        console.log(response.data);
        console.log(taskList);
        this.setState({
          taskList: taskList
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteTask = id => {
    axios
      .delete(
        `https://gbrvvbp9nc.execute-api.eu-west-1.amazonaws.com/dev/tasks/${id}`
      )
      .then(() => {
        const filteredTasks = this.state.taskList.filter(tas => {
          if (tas.id === id) return false;
          else return true;
        });
        this.setState({
          taskList: filteredTasks
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  completedTask = id => {
    axios
      .put(
        `https://gbrvvbp9nc.execute-api.eu-west-1.amazonaws.com/dev/tasks/${id}`,
        { completed: false }
      )
      .then(() => {
        const updateTask = this.state.taskList.map(task => {
          if (task.id === id) {
            task.completed = false;
          }
          return task;
        });
        this.setState({
          taskList: updateTask
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  addNewTask = task => {
    const newTask = {
      task: task,
      completed: false
    };
    axios
      .post(
        "https://gbrvvbp9nc.execute-api.eu-west-1.amazonaws.com/dev/tasks",
        newTask
      )
      .then(response => {
        const newTaskList = response.data;
        const copyOfTasks = this.state.taskList.slice();
        copyOfTasks.push(newTaskList);
        this.setState({
          taskList: copyOfTasks
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const thingsToDo = this.state.taskList.filter(task => {
      return task.completed === false;
    });

    const thingsDone = this.state.taskList.filter(task => {
      return task.completed === true;
    });

    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTasks addNewTaskFunc={this.addNewTask} />
          <RemainingTasks count={thingsToDo.length} />
          <ProgressBar
            percentage={
              (thingsDone.length * 100) /
              (thingsDone.length + thingsToDo.length)
            }
          />
          <h2>Things to do: </h2>
          {thingsToDo.map(taskList => {
            return (
              <Tasks
                completedTaskFunc={this.completedTask}
                key={taskList.id}
                completed={taskList.completed}
                task={taskList.task}
                id={taskList.id}
              />
            );
          })}
          <h2>Already done: </h2>
          {thingsDone.map(taskList => {
            return (
              <Tasks
                deleteTaskFunc={this.deleteTask}
                key={taskList.id}
                completed={taskList.completed}
                task={taskList.task}
                id={taskList.id}
              />
            );
          })}
        </div>
        <Gherkin />
      </div>
    );
  }
}

export default App;
