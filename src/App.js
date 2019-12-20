import React from "react";
import uuid from "uuid/v4";
import Header from "./Header";
import AddTasks from "./AddTasks";
import RemainingTasks from "./RemainingTasks";
import ProgressBar from "./ProgressBar";
import Tasks from "./Tasks";
import Notes from "./Notes";
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
    const filteredTasks = this.state.taskList.filter(task => {
      return task.id !== id;
    });

    this.setState({
      taskList: filteredTasks
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
          <AddTasks />
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
                key={taskList.id}
                done={taskList.done}
                task={taskList.task}
              />
            );
          })}
          <h2>Already done: </h2>
          {thingsDone.map(taskList => {
            return (
              <Tasks
                key={taskList.id}
                done={taskList.done}
                task={taskList.task}
              />
            );
          })}
        </div>
        <Notes />
        <Gherkin />
      </div>
    );
  }
}

export default App;
