import React from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/fetchItems';

class FullPanelDisplay extends React.Component{
  
  componentDidMount(){
    this.props.fetchData('http://localhost:8000/food/');
  }
  
  render(){
    return(
      <div>
        {this.props.items.map((item) => <div key = {item.id}>{item.id}: {item.itemCount} cases of {item.ingredientName}</div>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.fetchItems
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchData: (url) => dispatch(itemsFetchData(url))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(FullPanelDisplay);



















// const FullPanelDisplay = (props) =>(
//   props.itemAdd.map((item)=>{
//     return(<div key = {item.id}>{item.food}</div>)
//   })
// )



// console.log('Testing fetch data display');
    // fetch('http://localhost:8000/food/')
    //   .then(response => response.json())
    //   .then(data => this.setState({
    //     food: data
    //   }))



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

