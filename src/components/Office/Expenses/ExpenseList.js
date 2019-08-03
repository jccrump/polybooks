import React, { Component } from 'react'
import ExpenseListItem from './ExpenseListItem'

export default class ExpenseList extends Component {
    render() {
        return (
            <div className="expense-list-wrapper">
                <table className="expense-table">
                    <thead>
                        <th>Select</th>
                        <th>Expense Type</th>
                        <th>PO#</th>
                        <th>Project Manager</th>
                        <th>Address</th>
                        <th>Vendor</th>
                        <th>Trade</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </thead>
                    <tbody>
                        <ExpenseListItem />
                        <ExpenseListItem />
                        <ExpenseListItem />
                        <ExpenseListItem />
                        <ExpenseListItem />
                        <ExpenseListItem />
                        <ExpenseListItem />
                        <ExpenseListItem />
                        

                    </tbody>
                </table>
            </div>
        )
    }
}
