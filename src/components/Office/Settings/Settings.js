import React, { Component } from "react";
import AddUser from "./AddUser";

export default class Settings extends Component {
  render() {
    return (
      <div className="settings-wrapper">
        <AddUser />
      </div>
    );
  }
}
