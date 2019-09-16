import React from 'react';
import ReactDOM from 'react-dom';
import './Circle.css';

class Circle extends Component {
    state = {
        counter: 0,
    };
    addOne = () => {
        this.setState({ counter: this.state.counter + 1 });
    }
    reset = () => {
        this.setState({ counter: this.state.counter = 0 });
    }


    export default Circle;
