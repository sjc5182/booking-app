import React, { Component } from 'react';
import './App.css';
import BookingForm from './components/BookingForm';
import FullPanelDisplay from './components/FullPanelDisplay';
//import ProductDisplayPanel from './components/ProductDisplayPanel';

class App extends Component {

  render() {
    return (
      <div>
        <div className="App">
          <BookingForm />
        </div>
        <div>
          <FullPanelDisplay />
        </div>
      </div>
    );
  }
}

export default App;
