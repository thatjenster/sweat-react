// stateless components

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className="nav-wrapper blue accent-3">
            <div className="container">
                <Link to='/' className="brand-logo">Sweat by Jenny</Link>
            </div>

        </nav>
    ) 
}

export default Navbar;