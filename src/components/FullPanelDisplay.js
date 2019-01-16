import React from 'react';

export default class FullPanelDisplay extends React.Component {

  state = {
    item: null,
    startDate: null,
    endDate: null,
    count: null
  }
  componentDidMount(){
    const json = localStorage.getItem('count');
    const item = localStorage.getItem('item');
    const startDate = localStorage.getItem('startDate');
    const endDate = localStorage.getItem('endDate');
    const count = JSON.parse(json);
    this.setState(() => ({
      item, 
      startDate,
      endDate,
      count
    }))
  }

render(){
  return(
  <div>
    <div>{this.state.count}</div>
    <div>{this.state.item}</div>
    <div>{this.state.startDate}</div>
    <div>{this.state.endDate}</div>
  </div>
  )
}
}




