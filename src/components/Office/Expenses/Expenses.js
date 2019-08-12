import React, { Component } from "react";
import ExpenseFilters from "./ExpenseFilters";
import "../../../style/Expenses.css";
import axios from "axios";
import loading from "../../../assets/loading.gif";

export default class Expenses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      expenses: [],
      loading: true
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:8000/api/expense", {
        headers: { Authorization: localStorage.getItem("access-token") }
      })
      .then(response => {
        this.setState({
          expenses: response.data,
          loading: false
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    if (this.state.loading) {
      return <img src={loading} />;
    } else {
      return <ExpenseFilters expenses={this.state.expenses} />;
    }
  }
}
