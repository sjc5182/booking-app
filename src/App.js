import React, { Component } from 'react';
import './App.css';
import BookingForm from './components/BookingForm';
import ProductDisplayPanel from './components/ProductDisplayPanel';

class App extends Component {

  render() {
    return (
      <div>
        <div className="App">
        <BookingForm />
        </div>
        <ProductDisplayPanel />
      </div>
    );
  }
}

export default App;
