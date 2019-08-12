import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FaExternalLinkAlt } from 'react-icons/fa'

export default class CustomerList extends Component {
    render() {
        let customers = this.props.customers.map(customer => {
            return (
                <Link className="customer-card" to={`/office/customers/${customer._id}`}>
                    <div className="customer-card-title">
                        {`${customer.first_name} ${customer.last_name[0].toUpperCase()}.`}
                        <FaExternalLinkAlt />
                    </div>
                    <div className="customer-card-body">
                        <p>{customer.street_address}</p>
                        <p>{`${customer.phone}`}</p>
                        <p>{`${customer.email}`}</p>
                    </div>

                </Link>
            )
        })
        return (
            <div className="customer-main-wrapper">
                <div className="customer-btn-list">
                    <button className="customer-add-btn">Add Customer</button>
                </div>

                <div className="customer-list-wrapper" >

                    {customers}
                    {customers}
                    {customers}
                </div>
            </div>

        )
    }
}
