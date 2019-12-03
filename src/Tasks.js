import React from "react"

class Tasks extends React.Component {
    render() {
        return(
        <div className="row">
            <div className="col-12 col-sm-6">
                <p>{this.props.task}</p>
            </div>
            <div className="col-12 col-sm-3">
            <button className="btn btn-primary">Done</button>
            </div>
            <div className="col-12 col-sm-3">
            <button className="btn btn-primary">Delete</button>
        </div>
        </div>
        );
    }
}

export default Tasks;
