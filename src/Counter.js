import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

class Counter extends Component {

  render() {
    return (
      <div>
      <div className="App">
        <button style={{fontSize: '20px'}}onClick={()=> this.props.increaseCount()}>Increase</button>
        <h3>{this.props.counter}</h3>
        <button style={{fontSize: '20px'}}onClick={()=> this.props.decreaseCount()}>Decrease</button>
      </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCount: () => dispatch({type: 'INCREASE_COUNTER'}),
    decreaseCount: () => dispatch({type: 'DECREASE_COUNTER'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)