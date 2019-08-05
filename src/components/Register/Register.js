import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../../style/Register.css'

export default class Register extends Component {
    render() {
        return (
            <div>
                <div className="register-form-wrapper">
                    <h1>POLYBOOKS</h1>
                    <form>
                        <label for="email">Email</label>
                        <input name="name" placeholder="" autoComplete="off"></input>
                        <label for="password">Password</label>
                        <input type="password" name="password"></input>
                        <label for="confirmPassword">Confirm Password</label>
                        <input type="password" name="confirmPassword"></input>
                        <button type="submit">Register</button> 
                    </form>
                    Already have an account? <Link to="/login">Login Here!</Link>
                </div>
            </div>
        )
    }
}
