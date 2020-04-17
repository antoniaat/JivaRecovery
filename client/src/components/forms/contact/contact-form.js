import './contact-form.scss';

import React, { Component } from 'react';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="contact-form">
        <h1>Contact Us</h1>
        <p>
          <span>-</span>
          {' '}
          DROP US LINE
          {' '}
          <span>-</span>
        </p>

        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              placeholder="NAME"
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
              type="text"
              name="phone"
              value={this.state.phone}
              onChange={this.handleInputChange}
              placeholder="PHONE"
            />
          </label>
          <label>
            <input
              type="text"
              name="subject"
              value={this.state.subject}
              onChange={this.handleInputChange}
              placeholder="SUBJECT"
            />
          </label>
          <label>
            <textarea
              name="message"
              value={this.state.message}
              onChange={this.handleInputChange}
              placeholder="MESSAGE"
            />
          </label>

          <input type="submit" value="SEND MESSAGE" />
        </form>
      </div>
    );
  }
}
