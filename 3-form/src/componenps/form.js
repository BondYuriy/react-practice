import React, { Component } from "react";

const INITIAL_STATE = {
  login: "",
  email: "",
  password: "",
  gender: "null",
  age: "",
  agreed: false
};

export default class Form extends Component {
  state = { ...INITIAL_STATE };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleCheckboxChange = ({ target }) => {
    const { name, checked } = target;
    this.setState({ [name]: checked });
  };

  handleSudmit = e => {
    e.preventDefault();

    const { login, email, password, gender, age, agreed } = this.state;

    const userInput = {
      login: login,
      email: email,
      password: password,
      gender: gender,
      age: age,
      agreed: agreed
    };

    console.log(userInput);

    this.reset();
  };

  reset = () => this.setState({ ...INITIAL_STATE });

  render() {
    const { login, email, password, age, gender, agreed } = this.state;

    return (
      <form onSubmit={this.handleSudmit}>
        <div className="form-group">
          <label>Login: </label>
          <input
            type="text"
            name="login"
            value={login}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>E-mail: </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <span>Your gender: </span>
          <span className="radio-block">
            <label> male: </label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={this.handleChange}
            />
          </span>
          <span className="radio-block">
            <label> female: </label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={this.handleChange}
            />
          </span>
        </div>
        <div className="form-group">
          <label>Your age: </label>
          <select name="age" value={age} onChange={this.handleChange}>
            <option value="" disabled>
              ...
            </option>
            <option value="18-25">18-25</option>
            <option value="25-35">25-35</option>
            <option value="35+">35+</option>
          </select>
        </div>
        <div className="form-group">
          <label>Agreed to the terms: </label>
          <input
            name="agreed"
            type="checkbox"
            checked={agreed}
            onChange={this.handleCheckboxChange}
          />
        </div>
        <button type="submit" disabled={!agreed}>
          Sign up as {login}
        </button>
      </form>
    );
  }
}
