import React from 'react';
import '../../style/booking.css';

const test = {
  dropdownlist: [
    {
      id: 1,
      name: 'Pork'
    }, 
    {
      id: 2,
      name: 'Chicken'
    }, 
    {
      id: 3,
      name: 'Beef'
    }, 
    {
      id: 4,
      name: 'Steak'
    }, 
    {
      id: 5,
      name: 'Shirmps'
    }, 
    {
      id: 6,
      name: 'Lambs'
    }, 
    {
      id: 7,
      name: 'Eggs'
    }, 
    {
      id: 8,
      name: 'Crabs'
    }
  ]
}

export default class ProductList extends React.Component{
  render() {
      return(
        <div onClick={this.props.itemClick} className="itemlist">
          {test.dropdownlist.map((item) => (
            <li key={item.id} onClick={this.itemClick}>{item.name}</li>
          ))}
        </div>
      )
  }
};
