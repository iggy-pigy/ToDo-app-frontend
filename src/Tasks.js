import React from "react"
import "./Tasks.css";



class Tasks extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-12 col-sm-6">
                    <p>{this.props.task}</p>
                </div>
                <div className="col-12 col-sm-3">
                    <button className="button">Done</button>
                </div>
                <div className="col-12 col-sm-3">
                    <button className="button">Delete</button>
                </div>
            </div>
        );
    }
}

export default Tasks;
