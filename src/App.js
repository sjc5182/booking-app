import React, { Component } from 'react';
import './App.css';
import BookingForm from './components/BookingForm';

class App extends Component {

  render() {
    return (
      <div className="App">
       <BookingForm />
      </div>
    );
  }
}

export default App;
