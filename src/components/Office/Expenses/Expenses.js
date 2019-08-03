import React, { Component } from 'react'
import ExpenseFilters from './ExpenseFilters'
import ExpenseList from './ExpenseList'
import '../../../style/Expenses.css'

export default class Expenses extends Component {
    render() {
        return (
            <div>
                <ExpenseFilters />
            </div>
        )
    }
}
