// Class component - storing in local state the user information

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from './../../Store/actions/authAction'

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
        this.props.signIn(this.state);
    }
    render() {
        const { authError } = this.props;
        return(
            <div className="container login-container">
                <form className="logIn-form" onSubmit={this.handleSubmit}>
                    <h3>Sign In</h3>
                    <div className="input-field">
                        <label htmlFor="email"><i className="auth-icon fa fa-envelope-o" aria-hidden="true"></i>Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password"><i className="auth-icon fa fa-key" aria-hidden="true"></i>Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="auth-button">Log In</button>
                        <div className="red-text center">
                            { authError ? <p>{authError}</p> : null}
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);