import React from 'react';


const json = localStorage.getItem('count');
const item = localStorage.getItem('item');
const startDate = localStorage.getItem('startDate');
const endDate = localStorage.getItem('endDate');
const count = JSON.parse(json);

const FullPanelDisplay = () => (
  <div>
    <div>{count}</div>
    <div>{item}</div>
    <div>{startDate}</div>
    <div>{endDate}</div>
  </div>

);
export default FullPanelDisplay;