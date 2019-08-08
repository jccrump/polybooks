import React, { Component } from "react";

export default class ExpenseListItem extends Component {
  render() {
    return (
      <tr className="expense-table-row">
        <td>
          <input type="checkbox" />
        </td>
        <td>Invoice</td>
        <td>4146</td>
        <td>Loren J.</td>
        <td>1418 Tulane Court</td>
        <td>Southwest Gutters</td>
        <td>Gutters</td>
        <td>{this.props.amount}</td>
        <td>{this.props.status}</td>
      </tr>
    );
  }
}
