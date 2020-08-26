// Class component - storing in local state the user information

import React, { Component } from 'react'

class LogIn extends Component {
    constructor(){
        super();
        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    render() {
        return(
            <div className="container login-container">
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
                        <button className="auth-button">Log In</button>
                    </div>

                </form>
            </div>
        )
    }
}

export default LogIn;