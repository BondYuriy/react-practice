import React, { Component } from 'react';

export default class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState((prevState, props) => ({
      value: prevState.value + props.step,
    }));
  };

  handleDecrement = () => {
    this.setState((prevState, props) =>
      prevState.value > 0
        ? {
            value: prevState.value - props.step,
          }
        : null,
    );
  };

  render() {
    const { step } = this.props;
    const { value } = this.state;

    return (
      <div>
        <button type="button" onClick={this.handleDecrement}>
          -{step}
        </button>
        <span>{value}</span>
        <button type="button" onClick={this.handleIncrement}>
          +{step}
        </button>
      </div>
    );
  }
}
