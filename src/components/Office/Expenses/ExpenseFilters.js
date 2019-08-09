import React, { Component } from "react";
import FilterCategory from "./FilterCategory";
import ExpenseList from "./ExpenseList";

export default class ExpenseFilters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: [{ expenseStatus: [] }],
      query: "",
      searchedExpenses: []
    };
  }

  filterExpenses = (expenses, n) => {
    if (n < this.state.filters.length) {
      let x = expenses.filter(expense => {
        for (let key in this.state.filters[n]) {
          if (this.state.filters[n][key].length === 0) {
            return expense;
          } else {
            for (let i = 0; i < this.state.filters[n][key].length; i++) {
              if (expense[key] === this.state.filters[n][key][i]) {
                return expense;
              }
            }
          }
        }
        return null;
      });
      return this.filterExpenses(x, n + 1);
    } else {
      return expenses;
    }
  };
  handleFilterClick = (filter, value) => {
    let stateCopy = this.state;

    for (let i = 0; i < stateCopy.filters.length; i++) {
      if (stateCopy.filters[i][filter] !== undefined) {
        if (stateCopy.filters[i][filter].indexOf(value) >= 0) {
          let index = stateCopy.filters[i][filter].indexOf(value);

          stateCopy.filters[i][filter].splice(index, 1);
        } else {
          stateCopy.filters[i][filter].push(value);
        }
      } else if (
        stateCopy.filters[i][filter] === undefined &&
        stateCopy.filters.length === i + 1
      ) {
        let obj = {};
        obj[filter] = [value];
        stateCopy.filters.push(obj);
        i++;
      }
    }

    this.setState({
      ...stateCopy
    });
  };
  handleSearchChange = e => {
    let query = e.target.value;
    let searchedExpenses = this.props.expenses.filter(expense => {
      if (
        JSON.stringify(expense)
          .toLowerCase()
          .indexOf(query) >= 0
      ) {
        return true;
      }
      return false;
    });
    this.setState({ searchedExpenses });
  };
  render() {
    let filteredExpenses;
    if (this.state.searchedExpenses.length < 1) {
      filteredExpenses = this.filterExpenses(this.props.expenses, 0);
    } else {
      filteredExpenses = this.filterExpenses(this.state.searchedExpenses, 0);
    }
    return (
      <div className="expense-wrapper">
        <div className="expense-filter-wrapper">
          <input
            onChange={this.handleSearchChange}
            className="search-input"
            type="text"
            placeholder="Search Expenses"
          />
          <FilterCategory
            filterClick={this.handleFilterClick}
            subFilters={[
              "Pending Approval",
              "Ready to Pay",
              "Ready to File",
              "Missed Labor",
              "Ready to Reconcile",
              "Denied",
              "Closed"
            ]}
            dbName={"expenseStatus"}
            filterName={"Status"}
          />
          {/* <FilterCategory filterName={"Trade"} />
          <FilterCategory filterName={"Project Manager"} />
          <FilterCategory filterName={"Expense Type"} /> */}
        </div>
        <ExpenseList expenses={filteredExpenses} />
      </div>
    );
  }
}
