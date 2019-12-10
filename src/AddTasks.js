import React from "react"
import "./AddTasks.css";



class AddTasks extends React.Component {
   state= {
      task: "",
    };

    updateTask = (event) => {
        this.setState({
            task: event.target.value
        });
    };

    render() {
        return (
            <div className="tasks">
                <input type="text" onChange={this.updateTask} value={this.state.task} placeholder="Add things to do here" />
                <button>Add</button>
            </div>
        );
    }
}


export default AddTasks;