// stateless components no data being stored 

import React from 'react'
import { Link } from 'react-router-dom'
import SignIn from './SignIn'
import SignOut from './SignOut'
import { connect } from 'react-redux'
import { isLoaded } from 'react-redux-firebase'


const Navbar = (props) => {
    const { auth, profile } = props;
    
    const links = auth.uid ? <SignIn profile={profile}/> : <SignOut />;
    return(
        <nav className="nav-wrapper blue accent-3">
            <div className="container">
                <Link to='/dashboard' className="logo">Sweat</Link>
                { isLoaded(auth) && links }
            </div>

        </nav>
    ) 
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);