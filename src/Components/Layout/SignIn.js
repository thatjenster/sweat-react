// stateless component no data being stored

import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from './../../Store/actions/authAction'

const SignIn = (props) => {
    return(
        <ul className="right">
            <li><NavLink to="/create">New <i className="fa fa-plus" aria-hidden="true"></i></NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to="/dashboard" className="btn btn-floating light-blue lighten-3">{props.profile.initials}</NavLink></li>
        </ul>
    ) 
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignIn);