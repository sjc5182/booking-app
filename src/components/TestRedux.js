import React from 'react';
import { connect } from 'react-redux';

const Test = () => {
return(
  <div>
    <div>Hello</div>
  </div>
  )
}


const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(Test);