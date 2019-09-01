import React, { Component } from "react";

import "./LoginForm.scss";
import tlogo from "../../../assets/tlogo.png";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    // TODO:
  }

  render() {
    return (
      <div className="LoginForm">
        <img src={tlogo}></img>
        <h1>Login</h1>
        <p>
          <span>-</span> Explore all avaliable vehicles <span>-</span>
        </p>

        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              placeholder="EMAIL"
            />
          </label>
          <label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              placeholder="PASSWORD"
            />
          </label>
          <label className="terms-and-conditions">
            <span>
              I accept to the <a href="#">Terms & Privacy Policy</a>
            </span>
          </label>
          <input type="submit" value="LOGIN" />
          <label className="additional-links">
            <span>
              <a href="#">FORGOT PASSWORD</a>
            </span>
            <span>
              <a href="#">NEW TO JIVATRADE?</a>
            </span>
          </label>
        </form>
      </div>
    );
  }
}

export default LoginForm;
