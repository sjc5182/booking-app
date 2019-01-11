import React from 'react';
import '../style/booking.css';

export default class ItemListDrop extends React.Component{
  state = {
    targetList: null
  }
  
  itemClick = (e) => {
    this.setState({
      targetList: e.target.value
    })
  }
  
  render(){
    const { test } = this.props
    return(
      <div>
      <div className="itemlist">
        {test.dropdownlist.map((item) => (
          <li key={item.id} onClick={this.itemClick} value= {item.id}>{item.name}</li>
        ))}
      </div>
      <button onClick= {this.itemClick}>hello</button>
    </div>
    )
  }
};

