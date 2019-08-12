import React, { Component } from "react";
import loading from "../../../../assets/loading.gif";
import axios from "axios";
import ReactModal from "react-modal";
import CreateProject from "./CreateProject";

export default class CustomerDashboard extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      showModal: false
    };
  }
  componentWillMount() {
    if (this.props.location.customerProps) {
      this.setState({ ...this.props.location.customerProps, loading: false });
    } else {
      axios
        .get(
          `http://localhost:8000/api/customer/${this.props.match.params.id}`,
          {
            headers: { Authorization: localStorage.getItem("access-token") }
          }
        )
        .then(res => {
          this.setState({ ...res.data, loading: false });
        })
        .catch();
    }
  }
  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };
  render() {
    if (this.state.loading) {
      return <img src={loading} />;
    } else {
      return (
        <div className="customer-dashboard-wrapper">
          <div className="customer-dashboard">
            <div className="customer-dashboard-name">
              <div>
                {" "}
                {this.state.first_name} {this.state.last_name}
              </div>
              <button className="white-btn" onClick={this.handleOpenModal}>
                Create New Project
              </button>
              <ReactModal
                isOpen={this.state.showModal}
                contentLabel="Create New Project"
                onRequestClose={this.handleCloseModal}
                className="customer-dashboard-modal"
                overlayClassName="modal-overlay"
              >
                <CreateProject
                  customer={this.state}
                  closeModal={this.handleCloseModal}
                />
              </ReactModal>
            </div>
            <div className="customer-dashboard-info">
              <div className="info-left">
                <table>
                  <tr>
                    <td>Address:</td>
                    <td>
                      {this.state.street_address} {this.state.city},{" "}
                      {this.state.zip}
                    </td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>{this.state.email}</td>
                  </tr>
                  <tr>
                    <td>Phone:</td>
                    <td>{this.state.phone}</td>
                  </tr>
                  <tr>
                    <td>Project Manager:</td>
                    <td>{this.state.project_manager}</td>
                  </tr>
                </table>
              </div>
              <div className="info-right">Imagin this is a map!</div>
            </div>
            <div className="customer-project-list">This is a list</div>
          </div>
        </div>
      );
    }
  }
}
