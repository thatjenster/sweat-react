// stateless components no data being stored 

import React from 'react'
import { Link } from 'react-router-dom'
import SignIn from './SignIn'
import SignOut from './SignOut'
import { connect } from 'react-redux'

const Navbar = () => {
    return(
        <nav className="nav-wrapper blue accent-3">
            <div className="container">
                <Link to='/' className="logo">Sweat</Link>
                <SignIn />
                <SignOut />
            </div>

        </nav>
    ) 
}

const mapStateToProps = (state) => {
    console.log(state);
    return {

    }
}

export default connect(mapStateToProps)(Navbar);