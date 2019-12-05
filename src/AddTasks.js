import React from "react"
import "./AddTasks.css";



class AddTasks extends React.Component {
    render() {
        return(
        <div className="tasks">
        <input type="text" placeholder="Add things to do here" />
        <button>Add</button>
        </div>
        );
    }
}


export default AddTasks;