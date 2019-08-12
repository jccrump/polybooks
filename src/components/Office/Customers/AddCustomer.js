import React, { Component } from "react";
import AddCustomerForm from "./AddCustomerForm";
export default class AddCustomer extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false
    };
  }
  toggleDropdown = () => {
    let btn = document.getElementById("add-customer-btn");

    if (this.state.toggle) {
      this.setState({
        toggle: false
      });
      btn.innerText = "Add Customer";
      btn.style.backgroundColor = "rgb(51, 111, 223)";
    } else {
      this.setState({
        toggle: true
      });
      btn.innerText = "Cancel";
      btn.style.backgroundColor = "rgb(223, 51, 51)";
    }
  };
  render() {
    return (
      <div className="add-customer-wrapper">
        <div className="customer-btn-list">
          <button
            onClick={this.toggleDropdown}
            id="add-customer-btn"
            className="customer-add-btn"
          >
            Add Customer
          </button>
        </div>
        {this.state.toggle && (
          <AddCustomerForm
            toggle={this.toggleDropdown}
            refresh={this.props.refresh}
            projectManagers={this.props.projectManagers}
          />
        )}
      </div>
    );
  }
}
