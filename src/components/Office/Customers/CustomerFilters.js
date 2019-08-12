import React, { Component } from "react";
import FilterCategory from "./FilterCategory";
import axios from "axios";
import CustomerList from './CustomerList'

export default class CustomerFilters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterTypes: ["Project Manager"],
      filters: [],
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
  filterCustomers = (customers) => {

    if (this.state.filters.length < 1) {
      return customers
    } else {
      let filtered = []
      for (let i = 0; i < customers.length; i++) {
        for (let j = 0; j < this.state.filters.length; j++) {
          if (customers[i].project_manager === this.state.filters[j]) {
            filtered.push(customers[i])
          }
        }
      }
      return filtered
    }
  };
  render() {
    let filteredCustomers = this.filterCustomers(this.props.customers);
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
      <div className="customer-wrapper">
        <div className="customer-filter-wrapper">
          <input
            onChange={this.handleSearchChange}
            className="search-input"
            type="text"
            placeholder="Search Customers"
          />
          {filterTypes}
        </div>
        <CustomerList customers={filteredCustomers} />
      </div>
    );
  }
}
