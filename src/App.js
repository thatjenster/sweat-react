import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './Components/Layout/Navbar'
import styles from './Styles/styles.css'
import Dashboard from './Components/Dashboard/Dashboard';
import Details from './Components/Projects/Details'
import Login from './Components/Authenication/LogIn'
import Register from './Components/Authenication/Register'

class App extends Component {
  render() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/project/:id" component={Details} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </BrowserRouter>
  );
  }
}

export default App;
