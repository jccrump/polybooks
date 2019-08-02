import React, { Component } from 'react'

export default class FilterCategory extends Component {
    constructor(){
        super()
        this.state = {
            toggle : true
        }
    }

    toggleDropdown = () =>{
        console.log(this.state.toggle)
        if(this.state.toggle){
            this.setState({
                toggle: false
            })
        } else {
            this.setState({
                toggle: true
            })
        }
        
    }
    render() {
        return (
            <div className="expense-filter-category" onClick={this.toggleDropdown}>
                <p>{this.props.filterName}</p>
                {this.state.toggle && (
                    <ul>
                        <li><input type="checkbox" value="Pending Approval"></input>Pending Approval</li>
                        <li><input type="checkbox" value="Pending Approval"></input>Ready to Pay</li>
                        <li><input type="checkbox" value="Pending Approval"></input>Ready to File</li>
                        <li><input type="checkbox" value="Pending Approval"></input>Missed Labor</li>
                        <li><input type="checkbox" value="Pending Approval"></input>Ready to Reconcile</li>
                        <li><input type="checkbox" value="Pending Approval"></input>Denied</li>
                        <li><input type="checkbox" value="Pending Approval"></input>Closed</li>

                    </ul>
                )}
            </div>
        )
    }
}
