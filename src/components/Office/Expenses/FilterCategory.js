import React, { Component } from "react";

export default class FilterCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true
    };
  }

  toggleDropdown = () => {
    console.log(this.state.toggle);
    if (this.state.toggle) {
      this.setState({
        toggle: false
      });
    } else {
      this.setState({
        toggle: true
      });
    }
  };
  render() {
    let subFilters = this.props.subFilters.map(filter => {
      return (
        <li>
          <input
            type="checkbox"
            value={filter}
            onClick={() => this.props.filterClick(this.props.dbName, filter)}
          />
          {filter}
        </li>
      );
    });
    return (
      <div className="expense-filter-category">
        <p className="expense-filter-title" onClick={this.toggleDropdown}>
          {this.props.filterName}
        </p>
        {this.state.toggle && <ul>{subFilters}</ul>}
      </div>
    );
  }
}
