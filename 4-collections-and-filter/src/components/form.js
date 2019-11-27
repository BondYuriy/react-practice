import React, { Component } from 'react';

const INITIAL_STATE = {
  text: '',
};

export default class Form extends Component {
  state = { ...INITIAL_STATE };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSudmit = e => {
    e.preventDefault();

    const { text } = this.state;

    this.props.addNote(text);

    this.reset();
  };

  reset = () => this.setState({ ...INITIAL_STATE });

  render() {
    const { text } = this.state;

    return (
      <form onSubmit={this.handleSudmit}>
        <label htmlFor="userInputNde">
          Enter text:
          <input
            id="userInputNde"
            type="text"
            name="text"
            value={text}
            onChange={this.handleChange}
          />
        </label>

        <button type="button">add note</button>
      </form>
    );
  }
}
