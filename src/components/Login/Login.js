import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();

    let cred = {
      email: this.state.email,
      password: this.state.password
    };

    axios
      .post("http://localhost:8000/api/user/login", cred)
      .then(result => {
        if (result.data) {
          localStorage.setItem("access-token", result.data);
          window.location.href = "/office";
        }
      })
      .catch(err => console.log(err));
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentWillUpdate() {
    if (localStorage.getItem("access-token")) {
      window.location.href = "/office";
    }
  }

  render() {
    document.body.style.backgroundColor = '#eee'
    return (
      <div className="register-form-wrapper">
        <h1>POLYBOOKS</h1>
        <form onSubmit={this.handleSubmit}>
          <label for="email">Email</label>
          <input
            name="email"
            onChange={this.handleInputChange}
            placeholder=""
            autoComplete="off"
          />
          <label for="password">Password</label>
          <input
            type="password"
            onChange={this.handleInputChange}
            name="password"
          />
          <button type="submit">Login</button>
        </form>
        Dont have an account? <Link to="/register">Register Here!</Link>
      </div>
    );
  }
}
