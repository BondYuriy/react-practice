import React, { Component } from 'react';

export default class CounterStep extends Component {
  static defaultProps = {
    step: 1,
  };

  state = {
    value: 1,
  };

  handleIncrement = () => {
    this.setState(
      (prevState, props) =>
        props.changeStep(prevState.value + props.step) || {
          value: prevState.value + props.step,
        },
    );
  };

  handleDecrement = () => {
    this.setState((prevState, props) =>
      prevState.value > 1
        ? props.changeStep(prevState.value - props.step) || {
            value: prevState.value - props.step,
          }
        : null,
    );
  };

  render() {
    const { value } = this.state;

    return (
      <>
        <p>step: {value}</p>
        <button type="button" onClick={this.handleDecrement}>
          -1
        </button>
        <button type="button" onClick={this.handleIncrement}>
          +1
        </button>
      </>
    );
  }
}
