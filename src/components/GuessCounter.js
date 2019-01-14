import React from 'react';
import '../style/booking.css';


const GuessCounter = (props) => (
  <div className="counterdisplay">
    <div onClick={props.decrement}><i className="fas fa-minus" /></div>
    <div>{props.valueCount}</div>
    <div onClick={props.increment}><i className="fas fa-plus" /></div>
    <div><i className="fas fa-cart-plus"></i></div>
  </div>
);

export default GuessCounter