import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement, inDeCount, inputNumber, change } from '../actions/index';

class App extends React.Component {
  render() {
    return (
        <div>
          <h3>Counter</h3>
          <Counter 
            count={this.props.count} 
            onIncrement={this.props.onIncrement} 
            onDecrement={this.props.onDecrement} 
            countInDe={this.props.countInDe}
            onCountInDe={this.props.onCountInDe}
            amountToChange={this.props.amountToChange}
            changeAmountToCount={this.props.changeAmountToCount}
          />
        </div>
        
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onCountInDe: () => dispatch(inDeCount()),
    changeAmountToCount: () => dispatch(inputNumber()),
    amountToChange: (number) => dispatch(change(number)),
  };
}

function mapStateToProps(state) {
    return {
      count: state.count,
      countInDe: state.countInDe,
      inputtedNumber: state.inputtedNumber

    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);