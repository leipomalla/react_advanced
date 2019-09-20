import React, { Component } from 'react';
import './App.css';
import Score from './Score/Score';
import Circle from './Circle/Circle';
import GameOver from './GameOver/GameOver';


const App = () => (
  <div>
    <h1>Speedgame</h1>
    <div id="circle-container">
      <div className="circle" id="circle0"></div>
      <div className="circle" id="circle1"></div>
      <div className="circle" id="circle2"></div>
      <div className="circle" id="circle3"></div>

    </div>
    );
  }
    <div id="button-container">
      <button id="start">Start game</button>
      <button id="stop">Stop game</button>


    </div>

  </div>


);

export default App;