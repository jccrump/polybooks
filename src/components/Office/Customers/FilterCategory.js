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
    let subFilters = this.props.filterNames.map(filter => {
      let index = this.props.filterNames.indexOf(filter);
      return (
        <li key={index}>
          <input
            type="checkbox"
            value={this.props.filterValues[index]}
            onClick={() => this.props.addFilter(this.props.filterValues[index])}
          />
          {filter}
        </li>
      );
    });
    return (
      <div className="expense-filter-category">
        <p className="expense-filter-title" onClick={this.toggleDropdown}>
          {this.props.title}
        </p>
        {this.state.toggle && <ul>{subFilters}</ul>}
      </div>
    );
  }
}
