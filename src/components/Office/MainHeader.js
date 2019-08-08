import React, { Component } from "react";

export default class MainHeader extends Component {
  render() {
    return (
      <div className="mainheader-wrapper">
        <input
          className="main-search-input"
          placeholder="Expense, Customers, Projects..."
        />
        <div className="user-button">JC</div>
      </div>
    );
  }
}
