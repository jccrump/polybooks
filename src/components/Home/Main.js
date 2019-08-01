import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'

export default class Main extends Component {
    render() {
        document.body.style.backgroundColor = 'white'
        return (
            <div>
                <Navbar/>
            </div>
        )
    }
}
