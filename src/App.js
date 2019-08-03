import React, { Component } from 'react';
import './app.css';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Login from './components/Login/Login'
import Vendor from './components/Vendor/Vendor'
import Office from './components/Office/Office'
import Field from './components/Field/Field'
import Home from './components/Home/Home'


export default class App extends Component {
  constructor(){
    super()
    this.state = {
      userType : 'Office'
    }
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/office" render={() => {
            if(this.state.userType === 'Office'){
              return <Office />
            } else {
              return <Redirect to="/" />
            }
          }}/>
          <Route path="/field" component={Field}/>
          <Route path="/vendor" component={Vendor}/>
        </Switch>
      </BrowserRouter>
    );
  }
}
