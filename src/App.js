import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './Components/Layout/Navbar'
import styles from './Styles/styles.css'
import Header from './Components/Layout/Header'
import Dashboard from './Components/Dashboard/Dashboard';
import Details from './Components/Programs/Details'
import Login from './Components/Authenication/LogIn'
import Register from './Components/Authenication/Register'
import Create from './Components/Programs/Create'
import 'font-awesome/css/font-awesome.min.css'

class App extends Component {
  render() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Header} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/program/:id" component={Details} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/create" component={Create} />
        </Switch>
      </div>
    </BrowserRouter>
  );
  }
}

export default App;
