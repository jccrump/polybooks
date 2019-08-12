import React, { Component } from "react";
import axios from "axios";

export default class AddCustomerForm extends Component {
  constructor() {
    super();
    this.state = {
      success: false
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
        "http://localhost:8000/api/customer/addcustomer",
        {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          project_manager: this.state.project_manager,
          street_address: this.state.street_address,
          city: this.state.city,
          zip: this.state.zip,
          phone: this.state.phone,
          email: this.state.email
        },
        {
          headers: { Authorization: localStorage.getItem("access-token") }
        }
      )
      .then(res => {
        this.setState({ success: true });
        console.log(res);
        setTimeout(() => {
          this.setState({ success: false });
          this.props.toggle();
          this.props.refresh();
        }, 2000);
      })
      .catch();
  };
  render() {
    let projectManagers = this.props.projectManagers.map(pm => {
      return (
        <option key={pm._id} value={pm._id}>
          {pm.first_name} {pm.last_name[0].toUpperCase()}.
        </option>
      );
    });
    if (this.state.success) {
      return (
        <div className="add-customer-form-wrapper">New Customer Created!</div>
      );
    } else {
      return (
        <div className="add-customer-form-wrapper">
          <form
            onSubmit={this.handleSubmit}
            id="add-customer-form"
            autoComplete="off"
          >
            <div className="add-customer-form">
              <div className="input-group flex2">
                <label htmlFor="first_name">First Name:</label>
                <input
                  type="text"
                  onChange={this.handleInputChange}
                  name="first_name"
                  required
                />
              </div>
              <div className="input-group flex2">
                <label htmlFor="last_name">Last Name:</label>
                <input
                  type="text"
                  onChange={this.handleInputChange}
                  name="last_name"
                  required
                />
              </div>
              <div className="input-group flex3">
                <label htmlFor="street_address">Address:</label>
                <input
                  type="text"
                  onChange={this.handleInputChange}
                  name="street_address"
                  required
                />
              </div>
              <div className="input-group flex2">
                <label htmlFor="city">City:</label>
                <input
                  type="text"
                  onChange={this.handleInputChange}
                  name="city"
                  required
                />
              </div>
              <div className="input-group flex2">
                <label htmlFor="zip">Zip:</label>
                <input
                  type="text"
                  onChange={this.handleInputChange}
                  name="zip"
                  required
                />
              </div>
              <br />
              <div className="input-group flex2">
                <label htmlFor="phone">Phone:</label>
                <input
                  type="text"
                  onChange={this.handleInputChange}
                  name="phone"
                  required
                />
              </div>
              <div className="input-group flex2">
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  onChange={this.handleInputChange}
                  name="email"
                  required
                />
              </div>
              <div className="input-group flex2">
                <label htmlFor="project_manager">Project Manager:</label>
                <select
                  onChange={this.handleInputChange}
                  name="project_manager"
                  required
                >
                  <option />
                  {projectManagers}
                </select>
              </div>
            </div>
            <button type="submit" className="submit-btn green-btn">
              Add Customer
            </button>
          </form>
        </div>
      );
    }
  }
}
