import React from 'react';
import '../style/booking.css';
import ProductDisplayPanel from './ProductDisplayPanel';

export default class ItemListDrop extends React.Component{
  state = {
    targetList: null
  }
  
  itemClick = (e) => {
    this.setState({
      targetList: e.target.innerHTML
    })
  }
  
  render(){
    const { test } = this.props
    return(
      <div>
      <div className="itemlist">
        {test.dropdownlist.map((item) => (
          <li key={item.id} onClick={this.itemClick}>{item.name}</li>
        ))}
      </div>
      <ProductDisplayPanel test = {this.state.targetList}/>
    </div>
    )
  }
};

