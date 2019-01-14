import React from 'react';


const json = localStorage.getItem('count');
const item = localStorage.getItem('item');
const count = JSON.parse(json);

const FullPanelDisplay = () => (
  <div>
    <div>{count}</div>
    <div>{item}</div>
  </div>

);
export default FullPanelDisplay;

// export default class FullPanelDisplay extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       testValue: 0
//     }
//   }
    
//   render() {
//     const json = localStorage.getItem('test');
//     const count = JSON.parse(json);
//     return(
//       <div>
//         <div>{count}</div>
//       </div>
//     )
//   }
// }