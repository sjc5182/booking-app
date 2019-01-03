import React, { Component } from 'react';
import './App.css';
import GuessCounter from './components/GuessCounter';

class App extends Component {

  state = {
    value: 0
  }

  render() {
    return (
      <div className="App">
       <GuessCounter 
        valueCount = {this.state.value}
       />
      </div>
    );
  }
}

export default App;
