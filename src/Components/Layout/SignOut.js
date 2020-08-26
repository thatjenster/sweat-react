// stateless component no data being stored

import React from 'react'
import { NavLink } from 'react-router-dom'

const SignOut = () => {
    return(
        <ul className="right">
            <li><NavLink to="/register">Register</NavLink></li>
            <li><NavLink to="/login">Log In</NavLink></li>
        </ul>
    ) 
}

export default SignOut;