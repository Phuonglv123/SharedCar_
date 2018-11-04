import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import './navbar-link.scss'

class NavbarLink extends Component {

    render() {
        return (
            <div className="collapse myMenu navbar-collapse" id="collapsibleNavbar">
                <div className="navbar-nav d-flex justify-content-center w-100">
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
            </div>
        );
    }

}

export default NavbarLink;