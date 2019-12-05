import React from "react"
import "./Notes.css";



class Notes extends React.Component {
    render() {
        return(
          <div> 
          <h4>Notes</h4>
            <textarea className="Notes" placeholder="Add your notes here"></textarea>
            <button type="submit" value="Submit">Add</button>
          </div>
        );
    }
}


export default Notes;