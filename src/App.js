import React, { Component } from "react";
import "./app.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/Login/Login";
import Vendor from "./components/Vendor/Vendor";
import Office from "./components/Office/Office";
import Field from "./components/Field/Field";
import Admin from "./components/Admin/Admin";
import Register from "./components/Register/Register";
import Landing from './components/Landing/Landing'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      userType: "Office"
    };
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/admin" component={Admin} />
          <Route
            path="/office"
            render={() => {
              if (localStorage.getItem("access-token")) {
                return <Office />;
              } else {
                return <Redirect to="/login" />;
              }
            }}
          />
          <Route path="/field" component={Field} />
          <Route path="/vendor" component={Vendor} />
          <Route path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    );
  }
}
