import React from 'react';
import moment from 'moment';
import GuessCounter from './GuessCounter';
import ProductList from './product-list-container/ProductList';
import { connect } from 'react-redux';
import { itemsPostData } from '../actions/addItems';
import { itemsFetchData } from '../actions/fetchItems'
//import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import '../style/booking.css';

//const now = moment();
//console.log(now.format('MMM Do'));


class BookingForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      countValue: 0,
      targetList: '',
    }
  }

  itemClick = (e) => {
    this.setState({
      targetList: e.target.innerHTML
    })
  }

  onDatesChange = ({startDate, endDate}) => {
    this.setState(() => ({
      createdAt: startDate,
      endAt: endDate
    }));
  }
  
  increment = () => {
    this.setState(prev => ({
      countValue: prev.countValue + 1 
    }))
  }
  decrement = () => {
    this.setState(prev => ({
      countValue: prev.countValue - 1
    }))
  }

  handleSubmit = () => {
      this.props.postData('http://localhost:8000/create/', this.state).then(() => this.props.fetchData('http://localhost:8000/food'))
  }
  
  render(){
    return(
      <div className="container">
        <GuessCounter 
          valueCount = {this.state.countValue}
          increment = {this.increment}
          decrement = {this.decrement}
        />
        <ProductList itemClick = {this.itemClick}/>
        <button onClick = {this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    postData: (url, post) => dispatch(itemsPostData(url, post)),
    fetchData: (url) => dispatch(itemsFetchData(url))
  }
}

export default connect(null,mapDispatchToProps)(BookingForm);















      // createdAt: moment(),
      // endAt: moment().add(1, 'days'),
      // focusedInput: null,

// {/* <DateRangePicker 
//               startDateId = "startDate"
//               endDateId = "endDate"
//               startDate = {this.state.createdAt}
//               endDate = {this.state.endAt}
//               onDatesChange={this.onDatesChange}
//               focusedInput={this.state.focusedInput}
//               onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
//               showClearDates
//             /> */}



// itemClick = () =>{
  //   this.props.dispatch(addItem())
  // }
  // increment = () => {
  //   this.props.dispatch(incrementCount());
  // };
  // decrement = () => {
  //   this.props.dispatch(decrementCount());
  // };

// handleChange = (e) =>{
  //   const {name, value} = e.target;
  //   this.setState({[name]: value})
  //   console.log(this.state.email)
  // }

// <input type="text" name="email" onChange={this.handleChange}/>
// <input type="text" name="password" onChange={this.handleChange}/>
// <div> {this.props.addItem.map(item => <div key = {item.id}>{item.id}: {item.count} cases of {item.food}</div>)} </div>
          
  // const json = localStorage.getItem('count');
    // const item = localStorage.getItem('item');
    // console.log(localStorage.getItem('startDate'));

    // const count = JSON.parse(json);

    // this.setState(() => ({
    //   countValue: count,
    //   targetList: item
    // }))
     
  
  
  // componentDidUpdate(){
  //   const json = JSON.stringify(this.state.countValue);
  //   localStorage.setItem('count', json);
  //   localStorage.setItem('item', this.state.targetList);
  //     localStorage.setItem('startDate', this.state.createdAt);
  //     localStorage.setItem('endDate', this.state.endAt);
  // }