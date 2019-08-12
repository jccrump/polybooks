import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import AddCustomer from "./AddCustomer";

export default class CustomerList extends Component {
  render() {
    let customers = this.props.customers.map(customer => {
      return (
        <div className="customer-card">
          <div className="customer-card-title">
            {`${customer.first_name} ${customer.last_name[0].toUpperCase()}.`}
            <Link
              className="customer-dashboard-link"
              to={{
                pathname: `/office/customers/${customer._id}`,
                customerProps: { ...customer }
              }}
            >
              <FaExternalLinkAlt />
            </Link>
          </div>
          <div className="customer-card-body">
            <p>{customer.street_address}</p>
            <p>{`${customer.phone}`}</p>
            <p>{`${customer.email}`}</p>
          </div>
        </div>
      );
    });
    return (
      <div className="customer-main-wrapper">
        <AddCustomer
          refresh={this.props.refresh}
          projectManagers={this.props.projectManagers}
        />
        <div className="customer-list-wrapper">{customers}</div>
      </div>
    );
  }
}
