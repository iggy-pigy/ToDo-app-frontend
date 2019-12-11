import React from "react"
import "./Notes.css";



class Notes extends React.Component {
   state= {
      notes: "",
    };

    updateNotes = (event) => {
        this.setState({
            notes: event.target.value
        });
    };

    render() {
    return (
      <div>
        <h4>Notes</h4>
        <textarea className="Notes" onChange={this.updateNotes} value={this.state.notes} placeholder="Add your notes here"></textarea>
        <button type="submit" value="Submit">Add</button>
      </div>
    );
  }
}


export default Notes;