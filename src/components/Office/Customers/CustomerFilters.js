import React, { Component } from "react";
import FilterCategory from "./FilterCategory";
import axios from "axios";

export default class CustomerFilters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterTypes: ["Project Manager"],
      filters: [""],
      projectManagers: [],
      filteredCustomers: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:8000/api/user/field", {
        headers: { Authorization: localStorage.getItem("access-token") }
      })
      .then(res => {
        this.setState({ projectManagers: [...res.data] });
      });
  }
  addFilter = id => {
    let index = this.state.filters.indexOf(id);
    if (index === -1) {
      this.setState({ filters: [...this.state.filters, id] });
    } else {
      let copyFilters = this.state.filters;
      copyFilters.splice(index, 1);
      this.setState({ filters: [...copyFilters] });
    }
  };
  filterCustomers = (customers, n) => {
    if (n < this.state.filters.length) {
      let x = customers.filter(customer => {
        console.log(customers[n]);
        if (customer[n]._id == this.state.filters[n]) {
          return customer;
        } else {
          return false;
        }
      });
      console.log(x, n);
      return this.filterCustomers(x, n + 1);
    } else {
      return customers;
    }
  };
  render() {
    let filteredCustomers = this.filterCustomers(this.props.customers, 0);
    console.log(filteredCustomers);
    let names = this.state.projectManagers.map(person => {
      return `${person.first_name} ${person.last_name.toUpperCase()[0]}.`;
    });
    let ids = this.state.projectManagers.map(person => {
      return person._id;
    });
    let filterTypes = this.state.filterTypes.map(cat => {
      return (
        <FilterCategory
          title={cat}
          filterNames={names}
          filterValues={ids}
          addFilter={this.addFilter}
        />
      );
    });
    return (
      <div className="expense-wrapper">
        <div className="expense-filter-wrapper">
          <input
            onChange={this.handleSearchChange}
            className="search-input"
            type="text"
            placeholder="Search Customers"
          />
          {filterTypes}
        </div>
      </div>
    );
  }
}
