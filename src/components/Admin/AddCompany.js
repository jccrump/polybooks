import React, { Component } from "react";
import "../../style/Form.css";
import axios from "axios";

export default class AddCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company_name: ""
    };
  }
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:8000/api/admin/addcompany",
        {
          company_name: this.state.company_name
        },
        {
          headers: { Authorization: localStorage.getItem("access-token") }
        }
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <form className="form-wrapper" onSubmit={this.handleSubmit}>
          <h2>Add Company</h2>
          <label htmlFor="company_name">Company Name:</label>
          <input
            type="text"
            name="company_name"
            onChange={this.handleInputChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
