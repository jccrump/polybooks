import React, { Component } from "react";
import ExpenseFilters from "./ExpenseFilters";
import "../../../style/Expenses.css";
import axios from "axios";

export default class Expenses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      expenses: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:8000/api/expense", {
        headers: { Authorization: localStorage.getItem("access-token") }
      })
      .then(response => {
        this.setState({
          expenses: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return <ExpenseFilters expenses={this.state.expenses} />;
  }
}
