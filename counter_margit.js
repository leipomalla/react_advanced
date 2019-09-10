//Counter.js:

import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
    state = {
        counter: 0
    }
    addHandler = () => {
        this.setState({ counter: this.state.counter + 1}
        )
    };
    resetHandler = () => {
        this.setState({ counter: 0})
    };
    removeHandler = () => {
        this.setState({counter: this.state.counter -1}
        )
    };
     
        render() {
        return (
            <div className="container">
                <div className={this.state.counter % 2 === 0 ? "circle even" : "circle odd"}></div>
                <p className="number">{this.state.counter}</p>
                <div className="buttons">
                    <button onClick= {this.addHandler}>Add one</button>
                    <button onClick={this.removeHandler}>Remove one</button>
                    <button onClick={this.resetHandler}>Reset</button>

                </div>
            </div>
        )
    }
}
