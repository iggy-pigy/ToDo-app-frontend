import React from 'react';
import Header from "./Header";
import AddTasks from "./AddTasks";
import RemainingTasks from "./RemainingTasks";
import ProgressBar from './ProgressBar';
import Tasks from "./Tasks";
import Notes from "./Notes";


import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AddTasks />
      <RemainingTasks />
      <ProgressBar percentage={25}/>
      <div className="container">
        <Tasks task="Walk a dog"/>
        <Tasks task="Go to the gym"/>
        <Tasks task="Read a book"/>
        <Tasks task="Water plants"/>
      </div>
      <Notes />
    </div>
  );
}


export default App;
