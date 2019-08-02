import React, { Component } from 'react'

export default class ExpenseListItem extends Component {
    render() {
        return (
            <tr className="expense-table-row">
                <td><input type="checkbox"></input></td>
                <td>Invoice</td>
                <td>4146</td>
                <td>Loren J.</td>
                <td>1418 Tulane Court</td>
                <td>Southwest Gutters</td>
                <td>Gutters</td>
                <td>$300.00</td>
                <td>Ready to Pay</td>
            </tr>
        )
    }
}

