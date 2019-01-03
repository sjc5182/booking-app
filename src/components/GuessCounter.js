import React from 'react';




const GuessCounter = (props) => (
  <div>
    {props.valueCount}<br/>
    <i class="fas fa-plus"></i><br/>
    <i class="fas fa-minus"></i>
  </div>
);

export default GuessCounter