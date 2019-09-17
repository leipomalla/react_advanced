import React from 'react';
import './App.css';



const App = () => (
  <div id="container">
    <h1>Speedgame</h1>
    <div id="circle-container">
      <div className="circle" id="circle0"></div>
      <div className="circle" id="circle1"></div>
      <div className="circle" id="circle2"></div>
      <div className="circle" id="circle3"></div>

    </div>
    <div id="button-container">
      <button id="start">Start game</button>
      <button id="stop">Stop game</button>
    </div>
    <div id="scoreboard-container"> <div id="scoreboard">Your points: </div>
    </div>

    </div>
   
    
);

export default App;

