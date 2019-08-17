import React, { Component } from 'react'
import '../../style/landing.css'
import logo from '../../assets/logo.PNG'
import { Link } from 'react-router-dom'

export default class Landing extends Component {
    render() {
        document.body.style.backgroundColor = 'white';
        return (
            < div className="landing-wrapper" >
                <div className="main-holder">
                    <div className="logo-holder">
                        <img alt="Logo" src={logo} />
                        <h1>POLYBOOKS</h1>

                    </div>

                    <div className="main-desc">
                        <p>Thanks for stopping by to check out <b>Polybooks</b>, the revolutionary software that runs
                            every side of your
                            business, but we are currently in a closed BETA. If you would like to partake in the BETA please
                            submit your information and we will get back to you as soon as we are able to. By submitting your
                            information you will also join our newsletter so that you can be notified when Polybooks is
                            officially live!
                </p>
                        <form action="https://formspree.io/jcrump@polybooks.io" method="POST" >
                            <input type="text" name="First Name" placeholder="First Name" required />
                            <input type="text" name="Last Name" placeholder="Last Name" required />
                            <input type="text" name="Company Name" placeholder="Company Name" required />
                            <input type="email" name="Email" placeholder="Email" required />
                            <button type="submit">Join BETA</button>
                        </form>
                    </div>
                    <Link to="/login" >BETA Login</Link>
                </div>
            </div >
        )
    }
}
