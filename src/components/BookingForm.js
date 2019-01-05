import React from 'react';
import moment from 'moment';
import GuessCounter from './GuessCounter'
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();
console.log(now.format('MMM Do'));
export default class BookingForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: 0,
      createdAt: moment(),
      endAt: moment().add(1, 'days'),
      focusedInput: null
    }
  }

  increment = () => {
    this.setState(prev => ({
      value: prev.value + 1
    }))
  }

  //onDatesChange=

  render(){
    return(
      <div>
      <GuessCounter 
        valueCount = {this.state.value}
        increment = {this.increment}
      />
      <DateRangePicker 
        startDate = {this.state.createdAt}
        endDate = {this.state.endAt}
        onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate })}}
        focusedInput={this.state.focusedInput}
        onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
      />
      </div>
    )
  }

}