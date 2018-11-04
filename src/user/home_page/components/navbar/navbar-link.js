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
                                Introduce
                            </NavLink>
                            <NavLink to="/trips" className="link">
                                Trips
                            </NavLink>
                        </ul>
                    </div>
                    <div className="navbar-right">
                        <ul className="list-unstyled d-block">
                            <NavLink to="/support" className="link">
                                Support
                            </NavLink>
                            <NavLink to="/login" className="link">
                                Login
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

}

export default NavbarLink;