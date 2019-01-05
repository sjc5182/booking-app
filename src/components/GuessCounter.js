import React from 'react';

const GuessCounter = (props) => (
  <div>
    <div>{props.valueCount}</div>
    <div onClick={props.increment}><i className="fas fa-plus" /></div>
    <div><i className="fas fa-minus" /></div>
    
  </div>
);

export default GuessCounter