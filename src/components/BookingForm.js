import React from 'react';
import moment from 'moment';
import GuessCounter from './GuessCounter';
import ProductList from './product-list-container/ProductList';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import '../style/booking.css';

const now = moment();
console.log(now.format('MMM Do'));


export default class BookingForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      createdAt: moment(),
      endAt: moment().add(1, 'days'),
      focusedInput: null,
      countValue: 0,
      targetList: null,
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

  handleSubmit = (e) =>{
    // const json = localStorage.getItem('count');
    // const item = localStorage.getItem('item');
    // console.log(localStorage.getItem('startDate'));

    // const count = JSON.parse(json);

    // this.setState(() => ({
    //   countValue: count,
    //   targetList: item
    // }))
     e.preventDefault();
  }
  
  componentDidUpdate(){
    const json = JSON.stringify(this.state.countValue);
    localStorage.setItem('count', json);
    localStorage.setItem('item', this.state.targetList);
      localStorage.setItem('startDate', this.state.createdAt);
      localStorage.setItem('endDate', this.state.endAt);
  }
  
  render(){
    return(
        <div onSubmit={this.handleSubmit}>
          <div className="container">
            <GuessCounter 
              valueCount = {this.state.countValue}
              increment = {this.increment}
              decrement = {this.decrement}
            />
            <ProductList itemClick = {this.itemClick}/>
            <DateRangePicker 
              startDateId = "startDate"
              endDateId = "endDate"
              startDate = {this.state.createdAt}
              endDate = {this.state.endAt}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.focusedInput}
              onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
              showClearDates
            />
            <input type="submit" valule="Submit" />
          </div>
        </div>
     
    )
  }

}