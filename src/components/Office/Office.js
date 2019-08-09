import React, { Component } from "react";
import Navbar from "../Office/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Expenses from "../Office/Expenses/Expenses";
import Settings from "../Office/Settings/Settings";
import Customers from "../Office/Customers/Customers";
import MainHeader from "./MainHeader";
import "../../style/Office.css";

export default class Office extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <main>
          <MainHeader />
          <Switch>
            <Route path={"/office/expenses"} component={Expenses} />
            <Route path={"/office/settings"} component={Settings} />
            <Route path={"/office/customers"} component={Customers} />
          </Switch>
        </main>
      </div>
    );
  }
}
