import React, { Component } from "react";

import "./RegisterForm.scss";
import tlogo from "../../../assets/tlogo.png";
import { Link } from "react-router-dom";

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
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
      <div className="RegisterForm">
        <img src={tlogo}></img>
        <h1>Register</h1>
        <p>
          <span>-</span> Explore all avaliable vehicles <span>-</span>
        </p>

        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
              placeholder="FIRST NAME"
            />
          </label>
          <label>
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
              placeholder="LAST NAME"
            />
          </label>
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
          <label>
            <input
              type="password"
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.handleInputChange}
              placeholder="CONFIRM PASSWORD"
            />
          </label>
          <label className="terms-and-conditions">
            <span>
              I accept to the <a href="#">Terms and Privacy Policy</a>
            </span>
          </label>
          <input type="submit" value="REGISTER" />
          <label className="additional-links">
            <span>
              <Link to="/login">HAVE AN ACCOUNT?</Link>
            </span>
          </label>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
