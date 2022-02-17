import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  incrementBy1 = () => {
    this.props.dispatch({
      type: 'incrementBy1'
    });
  };

  incrementBy5 = () => {
    this.props.dispatch({
      type: 'incrementBy5'
    });
  };

  decrementBy1 = () => {
    this.props.dispatch({
      type: 'decrementBy1'
    });
  };

  decrementBy10 = () => {
    this.props.dispatch({
      type: 'decrementBy10'
    });
  };

  reset = () => {
    this.props.dispatch({
      type: 'Reset'
    });
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
        <span>{this.props.count}</span>
        <br />
        <button onClick={this.incrementBy1}>Icrement By 1</button>
        <br />
        <button onClick={this.incrementBy5}>Icrement By 5</button>
        <br />
        <button onClick={this.decrementBy1}>Decrement By 1</button>
        <br />
        <button onClick={this.decrementBy10}>Decrement By 10</button>
        <br />
        <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);