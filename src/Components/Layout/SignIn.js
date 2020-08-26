// stateless component no data being stored

import React from 'react'
import { NavLink } from 'react-router-dom'

const SignIn = () => {
    return(
        <ul className="right">
            <li><NavLink to="/create">New <i className="fa fa-plus" aria-hidden="true"></i></NavLink></li>
            <li><NavLink to="/">Log Out</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating light-blue lighten-3">JD</NavLink></li>
        </ul>
    ) 
}

export default SignIn;