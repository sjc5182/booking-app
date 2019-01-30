import React from 'react';
import { connect } from 'react-redux';

class FullPanelDisplay extends React.Component{
  
  constructor(){
    super();
    this.state = {
      food: []
    }
  }

  componentDidMount(){
    console.log('Testing fetch data display');
    fetch('http://localhost:8000/food/')
      .then(response => response.json())
      .then(data => this.setState({
        food: data
      }))
  }
  
  
  render(){
    return(
      <div></div>
    )
  }
}
// const FullPanelDisplay = (props) =>(
//   props.itemAdd.map((item)=>{
//     return(<div key = {item.id}>{item.food}</div>)
//   })
// )

// const mapStateToProps = (state) => {
//   return {
//     itemAdd: state.itemAdd
//   }
// }
export default FullPanelDisplay;

//export default connect(mapStateToProps)(FullPanelDisplay);
 











// state = {
  //   item: null,
  //   startDate: null,
  //   endDate: null,
  //   count: null
  // }
  // componentDidMount(){
  //   const json = localStorage.getItem('count');
  //   const item = localStorage.getItem('item');
  //   const startDate = localStorage.getItem('startDate');
  //   const endDate = localStorage.getItem('endDate');
  //   const count = JSON.parse(json);
  //   this.setState(() => ({
  //     item, 
  //     startDate,
  //     endDate,
  //     count
  //   }))
  // }

// render(){
//   return(
//   <div>
//     <div>{this.state.count}</div>
//     <div>{this.state.item}</div>
//     <div>{this.state.startDate}</div>
//     <div>{this.state.endDate}</div>
//   </div>
//   )
// }
// }

