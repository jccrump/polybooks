import React, { Component } from 'react'
import ExpenseList from '../Expenses/ExpenseList'
import FilterCategory from './FilterCategory'

export default class ExpenseFilters extends Component {
    render() {
        return (
            <div className="expense-wrapper">
                <div className="expense-filter-wrapper">
                    <input className="search-input" type="text" placeholder='Search Expenses'></input>
                    <FilterCategory filterName={'Status'}/>
                    <FilterCategory filterName={'Trade'}/>
                    <FilterCategory filterName={'Project Manager'}/>
                    <FilterCategory filterName={'Expense Type'}/>
                </div>
                <ExpenseList />
            </div>
        )
    }
}
