import React, { Component } from 'react';
import './GameOver.css';


class GameOver extends Component {
    state = {
        showGameOver: false
    };

    gameOverHandler = () => {
        this.setState({ showGameOver: true });
    }

    render() {
        return (
            <div id="scoreboard-container">
                <div id="scoreboard">Your points: </div>
            </div>
        )
    };
}

export default GameOver;