import React from 'react';
import '../../styles/navbar.css'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import Logo2 from '../../assets/logo2.png'
function Navbar(props) {
    return (
        <nav className="alac-pack-navbar">
            <div className="alac-pack-nav-left">
                <NavLink to="/" className="alac-pack-nav-logo">
                    <img src={Logo} className='alac-pack-va-mid alac-pack-logo-large' alt="Logo" />
                    <img src={Logo2} className='alac-pack-va-mid alac-pack-logo-small' alt="Logo" />
                </NavLink>
            </div>
            <div className="alac-pack-nav-btn">
                <NavLink className="alac-pack-nav-login-btn">Login </NavLink>
                <NavLink className="alac-pack-nav-signup-btn">Sign Up</NavLink>
            </div>
        </nav>

    );
}

export default Navbar;