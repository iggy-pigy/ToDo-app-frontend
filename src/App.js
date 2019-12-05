import React from 'react';
import Header from "./Header";
import RemainingTasks from "./RemainingTasks";
import ProgressBar from './ProgressBar';
import Tasks from "./Tasks";


import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <RemainingTasks />
      <ProgressBar percentage={25}/>
      <div className="container">
        <Tasks task="Walk a dog"/>
        <Tasks task="Go to the gym"/>
        <Tasks task="Read a book"/>
        <Tasks task="Water plants"/>
      </div>

    </div>
  );
}


export default App;
