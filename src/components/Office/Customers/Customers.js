import React, { Component } from "react";
import CustomerFilters from "./CustomerFilters";
import axios from "axios";
import "../../../style/Customers.css";
import loading from "../../../assets/loading.gif";

export default class Customers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      loading: true
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:8000/api/customer", {
        headers: { Authorization: localStorage.getItem("access-token") }
      })
      .then(response => {
        this.setState({
          customers: response.data,
          loading: false
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  handleRefresh = () => {
    axios
      .get("http://localhost:8000/api/customer", {
        headers: { Authorization: localStorage.getItem("access-token") }
      })
      .then(response => {
        this.setState({
          customers: response.data,
          loading: false
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    if (this.state.loading) {
      return <img src={loading} />;
    } else {
      return (
        <div>
          <CustomerFilters
            refresh={this.handleRefresh}
            customers={this.state.customers}
          />
        </div>
      );
    }
  }
}
