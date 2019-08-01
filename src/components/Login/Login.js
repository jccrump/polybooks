import React, { Component } from 'react'
import '../../style/login.css'
import logo from '../../assets/images/logo.png'

export default class Login extends Component {
    render() {
        document.body.style.backgroundColor = '#EEE'

        return (
            <div className="login-wrapper">
                <div className="logo-holder">
                    <img src={logo} className='login-logo' />
                    <h2>POLYBOOKS</h2>
                </div>
                
                <form className="login-form">
                    <input type="text"></input>
                    <input type="password"></input>
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}
