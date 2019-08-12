import React, { Component } from "react";
import "../../../../style/Model.css";
import { FaTimes } from "react-icons/fa";

export default class CreateProject extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="customer-dashboard-modal-wrapper">
        <div className="modal-title">
          <h2>
            Create New Project for {this.props.customer.first_name}{" "}
            {this.props.customer.last_name}
          </h2>
          <button className="close-btn" onClick={this.props.closeModal}>
            <FaTimes />
          </button>
        </div>
        <div className="modal-body">
          <form className="modal-form">
            <div className="form-group">
              <div className="input-group flex2">
                <label for="po">PO#</label>
                <input type="text" name="po" step="1" />
              </div>
              <div className="input-group flex3">
                <label for="street_address">Street Address</label>
                <input
                  type="text"
                  name="street_address"
                  value={this.props.customer.street_address}
                />
              </div>
              <div className="input-group flex2">
                <label for="city">City</label>
                <input
                  type="text"
                  name="city"
                  value={this.props.customer.city}
                />
              </div>
              <div className="input-group flex2">
                <label for="zip">Zip</label>
                <input type="text" name="zip" value={this.props.customer.zip} />
              </div>
            </div>

            <div className="input-group">
              <label>Trades</label>
              <div className="trades">
                <input type="checkbox" name="vehicle2" value="Car" />
                Roof
                <br />
                <input type="checkbox" name="vehicle2" value="Car" />
                Gutters
                <br />
                <input type="checkbox" name="vehicle2" value="Car" />
                Stain
                <br />
                <input type="checkbox" name="vehicle2" value="Car" />
                Paint
                <br />
                <input type="checkbox" name="vehicle2" value="Car" />
                Garage
                <br />
                <input type="checkbox" name="vehicle2" value="Car" />
                Siding
                <br />
                <input type="checkbox" name="vehicle2" value="Car" />
                AC
                <br />
                <input type="checkbox" name="vehicle2" value="Car" />
                Screens
                <br />
                <input type="checkbox" name="vehicle2" value="Car" />
                Windows
              </div>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
