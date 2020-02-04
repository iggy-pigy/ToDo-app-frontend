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
    taskList: [
      {
        task: "Walk a dog",
        done: false,
        id: uuid()
      },
      {
        task: "Go to the gym",
        done: true,
        id: uuid()
      },
      {
        task: "Read a book",
        done: true,
        id: uuid()
      },
      {
        task: "Water plants",
        done: true,
        id: uuid()
      },
      {
        task: "Write a letter",
        done: false,
        id: uuid()
      }
    ]
  };

  deleteTask = id => {
    const taskList = this.state.taskList.filter(tas => tas.id !== id);

    this.setState({
      taskList
    });
  };

  doneTask = id => {
    const doneTas = this.state.taskList.map(task => {
      task.done = task.id === id ? true : task.done;
      return task;
    });

    this.setState({
      taskList: doneTas
    });
  };

  addNewTask = task => {
    const newTask = {
      task: task,
      done: false,
      id: uuid()
    };
    const copy = this.state.taskList.slice();
    copy.push(newTask);

    this.setState({
      taskList: copy
    });
  };

  render() {
    const thingsToDo = this.state.taskList.filter(task => {
      return task.done === false;
    });

    const thingsDone = this.state.taskList.filter(task => {
      return task.done === true;
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
                doneTaskFunc={this.doneTask}
                key={taskList.id}
                done={taskList.done}
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
                done={taskList.done}
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
