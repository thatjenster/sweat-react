// Class component - storing in local state the user information

import React, { Component } from 'react'

class LogIn extends Component {
    constructor(){
        super();
        this.state = {}
    }

    handleChange = (event) => {
        console.log(event);
    }

    handleSubmit = (event) => {
        console.log(event);
    }
    render() {
        return(
            <div className="container">
                <form className="logIn-form" onSubmit={this.handleSubmit}>
                    <h3>Sign In</h3>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="login-btn">Log In</button>
                    </div>

                </form>
            </div>
        )
    }
}

export default LogIn;