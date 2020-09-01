import React from 'react'
import headerImg from './../../Assets/header.png'

const Header = () => {
    return(
        <div>
            <div className="header-image">
                <img src={headerImg} alt="header logo"/>
                <p>Strive for PROGRESS not PERFECTION</p>
            </div>

            <div class="social-box">
                <div class="social">
                    <a href="https://www.instagram.com/jennyt.dinh/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    <a href="https://twitter.com/thatjenster" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                    <a href="https://github.com/thatjenster" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
                    <a href="https://www.linkedin.com/in/thatjenster-jennydinh/" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Header;