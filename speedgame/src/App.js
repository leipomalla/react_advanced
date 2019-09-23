import React, { Component } from "react";
import "./App.css";
import Circle from "./Circle/Circle";
import GameOver from "./GameOver/GameOver";
import Score from "./Score/Score";

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

class App extends Component {
  state = {
    score: 0,
    current: 0,
    showGameOver: false,
    rounds: 0
  };

  pace = 1500; /* koska classbased, ei tarvitse olla let/var/const*/
  timer = undefined;

  next = () => {
    if (this.state.rounds >= 5) {
      this.endHandler();
      return;
    }
    let nextActive = undefined;

    do {
      nextActive = getRandomInt(1, 4);
    } while (nextActive === this.state.current);

    this.setState({
      current: nextActive
    });

    this.pace *= 0.95;
    this.timer = setTimeout(this.next, this.pace);
    this.setState({ rounds: this.state.rounds + 1 });

    /* voi käyttää sulkeita funktiota kutsuessa, ei oo pakko*/

    console.log(this.state.rounds);
  };

  clickHandler = crlId => {
    console.log("wow!", crlId);

    if (this.state.current !== crlId) {
      this.endHandler();
      return;
    }

    this.setState({
      score: this.state.score + 1
    });

    this.setState({
      rounds: 0
    });
  };

  startHandler = () => {
    this.next();
  };

  endHandler = () => {
    clearTimeout(this.timer);
    this.setState({ showGameOver: true });
  };

  render() {
    return (
      <div>
        <h1>Speed game</h1>
        <p>Your score is: {this.state.score}</p>
        <Circle
          buttonColor="#d52468"
          active={this.state.current === 1}
          click={() => this.clickHandler(1)}
        />
        <Circle
          buttonColor="#fdf04c"
          active={this.state.current === 2}
          click={() => this.clickHandler(2)}
        />
        <Circle
          buttonColor="#1a9fa7"
          active={this.state.current === 3}
          click={() => this.clickHandler(3)}
        />
        <Circle
          buttonColor="#fd8048"
          active={this.state.current === 4}
          click={() => this.clickHandler(4)}
        />
        <div>
          <button onClick={this.startHandler}>Start game</button>
          <button onClick={this.endHandler}>End game</button>
        </div>

        {this.state.showGameOver && <GameOver score={this.state.score} />}
      </div>
    );
  }
}

export default App;
