import React, { Component } from "react";
import Fade from "react-reveal/Fade";

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      address: "",
      feedback: "",
    };
  }
  submitFeedback = (e) => {
    e.preventDefault();
    const feedback = {
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      feedback: this.state.feedback,
    };
    this.props.submitFeedback(feedback);
  };
  render() {
    return (
      <div>
        <Fade top cascade>
          <form onSubmit={this.createFeedback}>
            <ul className="form-container">
              <li>
                <label>Email</label>
                <input
                  name="email"
                  type="email"
                  reqwuired
                  onChange={this.handleInput}
                ></input>
              </li>
              <li>
                <label>Name</label>
                <input
                  name="name"
                  type="text"
                  reqwuired
                  onChange={this.handleInput}
                ></input>
              </li>
              <li>
                <label>Address</label>
                <input
                  name="address"
                  type="text"
                  reqwuired
                  onChange={this.handleInput}
                ></input>
              </li>
              <li>
                <button className="button primary" type="submit">
                  Checkout
                </button>
              </li>
            </ul>
          </form>
        </Fade>
      </div>
    );
  }
}
