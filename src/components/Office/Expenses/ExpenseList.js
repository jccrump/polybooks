import React, { Component } from "react";
import ExpenseListItem from "./ExpenseListItem";

export default class ExpenseList extends Component {
  componentWillMount() {}
  render() {
    let expenseItems = this.props.expenses.map(expense => {
      return (
        <ExpenseListItem
          key={expense._id}
          amount={expense.expenseTotal}
          status={expense.expenseStatus}
        />
      );
    });
    return (
      <div className="expense-list-wrapper">
        <table className="expense-table">
          <thead>
            <tr>
              <th>Select</th>
              <th>Expense Type</th>
              <th>PO#</th>
              <th>Project Manager</th>
              <th>Address</th>
              <th>Vendor</th>
              <th>Trade</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>{expenseItems}</tbody>
        </table>
      </div>
    );
  }
}
