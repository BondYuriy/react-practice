import React, { Component } from 'react';

const INITIAL_STATE = {
  login: '',
  email: '',
  password: '',
  gender: null,
  age: '',
  agreed: false,
};

const GENDER = {
  male: 'male',
  female: 'female',
};

const AGE = {
  youth: '18-25',
  middle: '25-40',
  senior: '40+',
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
      login,
      email,
      password,
      gender,
      age,
      agreed,
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
          <label htmlFor="userInputLogin">
            Login:
            <input
              id="userInputLogin"
              type="text"
              name="login"
              value={login}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="userInputEmail">
            E-mail:
            <input
              id="userInputEmail"
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="userInputPassword">
            Password:
            <input
              id="serInputPassword"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <span>Your gender: </span>
          <span className="radio-block">
            <label htmlFor="userInputMale">
              male:
              <input
                id="userInputMale"
                type="radio"
                name="gender"
                value="male"
                checked={gender === GENDER.male}
                onChange={this.handleChange}
              />
            </label>
          </span>
          <span className="radio-block">
            <label htmlFor="userInputFemale">
              female:
              <input
                id="userInputFemale"
                type="radio"
                name="gender"
                value="female"
                checked={gender === GENDER.female}
                onChange={this.handleChange}
              />
            </label>
          </span>
        </div>
        <div className="form-group">
          <label htmlFor="userInputAge">
            Your age:
            <select
              id="userInputAge"
              name="age"
              value={age}
              onChange={this.handleChange}
            >
              <option value="" disabled>
                ...
              </option>
              <option value={AGE.youth}>{AGE.youth}</option>
              <option value={AGE.middle}>{AGE.middle}</option>
              <option value={AGE.senior}>{AGE.senior}</option>
            </select>
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="userInputAgreed">
            Agreed to the terms:
            <input
              id="userInputAgreed"
              name="agreed"
              type="checkbox"
              checked={agreed}
              onChange={this.handleCheckboxChange}
            />
          </label>
        </div>
        <button type="submit" disabled={!agreed}>
          Sign up as {login}
        </button>
      </form>
    );
  }
}
