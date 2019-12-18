import React, { Component } from "react";

import "./LoginForm.scss";
import tlogo from "../../../assets/tlogo.png";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: "",
      isLoggedIn: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  handleSubmit(event) {
    event.preventDefault();

    this.setState(
      {
        error: ""
      },
      async () => {
        try {
          const result = await LoginForm.service.login();

          if (!result.success) {
            const errors = Object.values(result.errors).join(" ");
            throw new Error(errors);
          }
          this.setState({
            isLoggedIn: true
          });
        } catch (error) {
          this.setState({
            error: error.message
          });
        }
      }
    );
  }

  render() {
    const { email, password, isLoggedIn, error } = this.state;

    return (
      <div className="LoginForm">
        {error.length ? <div> Something went wrong: {error}</div> : null}
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
              <a href="/register">NEW TO JIVATRADE?</a>
            </span>
          </label>
        </form>
      </div>
    );
  }
}

export default LoginForm;
