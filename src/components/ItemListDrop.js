import React from 'react';
import '../style/booking.css';

// export default class ItemListDrop extends React.Component{
//   render(){
//     const { test } = this.props
//     return(
//       <div>{console.log(test)}</div>
//     )
//   }
// };

const ItemListDrop = ({test}) => (
  // <div className="outer-wrapper">
  //   <div className="">
      
  //   </div>
  // </div>

  //<div>{console.log(test)}</div>
  <div className="itemlist">
    {test.dropdownlist.map((item) => (
        //console.log(item.name)
        <li key={item.id}>{item.name}</li>
    ))}
  </div>
);

export default ItemListDrop;