import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import './navbar-link.scss'

class NavbarLink extends Component {

    render() {
        return (
            <div className="myMenu d-flex justify-content-center" id="collapsibleNavbar">
                    {/* Menu left */}
                    <div className="navbar-left">
                        <ul className="list-unstyled d-block">
                            <NavLink to="/introduce" className="link">
                                <span>Introduce</span> 
                            </NavLink>
                            <NavLink to="/trips" className="link">
                                <span>Trips</span>
                            </NavLink>
                        </ul>
                    </div>

                    {/* Logo */}
                    <div className="myLogo">
                        <div
                            className="logo"
                            alt="myLogo">
                            <h4 className="name_company text-center">CYB</h4>
                        </div>
                    </div>

                    {/* Menu right */}
                    <div className="navbar-right">
                        <ul className="list-unstyled d-block">
                            <NavLink to="/support" className="link">
                                <span>Support</span>
                            </NavLink>
                            <NavLink to="/login" className="link">
                                <span>Login</span>
                            </NavLink>
                        </ul>
                    </div>
            </div>
        );
    }

}

export default NavbarLink;