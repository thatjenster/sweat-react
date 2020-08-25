import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './Components/Layout/Navbar'
import Navbar from './Components/Layout/Navbar'

class App extends Component {
  render() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
    </BrowserRouter>
  );
  }
}

export default App;
