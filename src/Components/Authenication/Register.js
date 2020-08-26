// Class component - storing in local state the user information

import React, { Component } from 'react'

class Register extends Component {
    constructor(){
        super();
        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: ""
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
            <div className="container register-container">
                <form className="logIn-form" onSubmit={this.handleSubmit}>
                    <h3>Create an <span className="highlight">Account</span></h3>
                    <div className="input-field">
                        <label htmlFor="email"><i className="auth-icon fa fa-envelope-o" aria-hidden="true"></i>Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password"><i className="auth-icon fa fa-key" aria-hidden="true"></i>Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName"><i className="auth-icon fa fa-user" aria-hidden="true"></i>First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName"><i className="auth-icon fa fa-user" aria-hidden="true"></i>Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="auth-button">Register</button>
                    </div>

                </form>
            </div>
        )
    }
}

export default Register;