import React, { Component } from "react";
import "../../../style/Settings.css";
import axios from "axios";

export default class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      phone: "",
      role: "",
      access_allowed: "",
      email: "",
      password: "",
      sucess: ""
    };
  }
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:8000/api/user/register",
        {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          phone: this.state.phone,
          role: this.state.role,
          access_allowed: this.state.access_allowed,
          email: this.state.email,
          password: this.state.password
        },
        {
          headers: { Authorization: localStorage.getItem("access-token") }
        }
      )
      .then(res => {
        if (res) {
          this.setState({ success: true });
          document.getElementById("add-user-form").reset();
          setTimeout(() => {
            this.setState({ success: false });
          }, 2000);
        }
      })
      .catch();
  };
  render() {
    return (
      <div>
        <form
          className="add-user"
          autoComplete="off"
          onSubmit={this.handleSubmit}
          id="add-user-form"
        >
          <h2>Add User</h2>
          {this.state.success && <h5 id="user-added-message">User Added!</h5>}
          <label htmlFor="first_name">First Name:</label>
          <input
            type="text"
            name="first_name"
            onChange={this.handleInputChange}
            required
          />
          <label htmlFor="last_name">Last Name:</label>
          <input
            type="text"
            name="last_name"
            onChange={this.handleInputChange}
            required
          />
          <label htmlFor="phone">Phone #:</label>
          <input
            type="text"
            name="phone"
            onChange={this.handleInputChange}
            required
          />
          <label htmlFor="role">Role:</label>
          <select name="role" onChange={this.handleInputChange} required>
            <option />
            <option>Office</option>
            <option>Field</option>
            <option>Vendor</option>
            <option>Customer</option>
          </select>
          <label htmlFor="access_allowed">Access Allowed:</label>
          <select
            name="access_allowed"
            onChange={this.handleInputChange}
            required
          >
            <option />
            <option>Yes</option>
            <option>No</option>
          </select>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            onChange={this.handleInputChange}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            onChange={this.handleInputChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
