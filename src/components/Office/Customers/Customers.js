import React, { Component } from "react";
import CustomerFilters from "./CustomerFilters";
import axios from "axios";

export default class Customers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      customers: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:8000/api/customer", {
        headers: { Authorization: localStorage.getItem("access-token") }
      })
      .then(response => {
        this.setState({
          customers: response.data
        });
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <CustomerFilters customers={this.state.customers} />
      </div>
    );
  }
}
