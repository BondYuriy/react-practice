import React, { Component } from "react";
import Toggle from "./toggle";
import Counter from "./counter";
import CounterStep from "./counter-step";

export default class App extends Component {
  state = {
    step: 1
  };

  changeStep = newStep => {
    this.setState({ step: newStep });
  };

  render() {
    const { step } = this.state;

    return (
      <>
        <h1>Counter</h1>
        <span>Counter step</span>
        <Toggle>
          <CounterStep changeStep={this.changeStep} />
        </Toggle>
        <br />
        <Counter step={step} />
      </>
    );
  }
}
