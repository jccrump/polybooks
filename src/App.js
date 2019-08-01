import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import './App.css';
import Login from './components/Login/Login'
import Home from './components/Home/Main'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <BrowserRouter>     
        <Route exact={true} path="/" component={Home} />
        <Route path="/login" component={Login} />
    </BrowserRouter>
  );
}

export default App;
