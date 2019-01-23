import React from 'react';
import { connect } from 'react-redux';
import { incrementCount, decrementCount } from '../actions/counter';
import '../style/booking.css';


class TestRedux extends React.Component{


  increment = () => {
    this.props.dispatch(incrementCount());
  };
  decrement = () => {
    this.props.dispatch(decrementCount());
  };
  render(){
  return (
  <div className="counterdisplay">
    <div onClick={this.decrement}><i className="fas fa-minus" /></div>
    <div>{this.props.count}</div>
    <div onClick={this.increment}><i className="fas fa-plus" /></div>
    <div><i className="fas fa-cart-plus"></i></div>
  </div>
  )
  }
}


const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(TestRedux);