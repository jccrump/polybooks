import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import {FaBars, FaUser, FaDesktop, FaWrench, FaCog, FaFileInvoiceDollar} from 'react-icons/fa'
import '../../../style/Navbar.css'

export default class Navbar extends Component {

    render() {
        return (
            <header>
                <nav className="sidenav-wrapper">
                    <button className="toggle-btn"><FaBars/></button>
                    <ul className="nav-list">
                        <li className="nav-link"><NavLink to="/office"><FaDesktop /></NavLink></li>
                        <li className="nav-link"><NavLink to="/office/customers"><FaUser /></NavLink></li>
                        <li className="nav-link"><NavLink to="/office/projects"><FaWrench /></NavLink></li>
                        <li className="nav-link"><NavLink to="/office/expenses"><FaFileInvoiceDollar /></NavLink></li>
                        <li className="nav-link"><NavLink to="/office/settings"><FaCog /></NavLink></li>
                    </ul>
                    
                </nav>
            </header>
        )
    }
}
