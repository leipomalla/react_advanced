import React, { Component } from 'react'; //class-based Component
import './App.css';
import Header from './Header/Header.js'
import Main from './Main/Main.js'
import Footer from './Footer/Footer.js'

class  App extends Component {
  state = {
    counter: 0
  };
  
  render () {
    return (
      <div>
        <div>
          <p>
          {this.state.counter}
          </p>
          </div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}
export default App;
