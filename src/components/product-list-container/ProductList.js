import React from 'react';
import ItemListDrop from '../ItemListDrop';

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
    
    return (
      <ItemListDrop test = {test}/>
    )
  }
};
