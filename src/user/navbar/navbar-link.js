import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';

import './navbar-link.scss'

class NavbarLink extends Component {

    render() {
        return (
            <div className="myMenu d-flex justify-content-between" id="collapsibleNavbar">
                {/* Logo */}
                <NavLink to="/" className="myLogo d-flex">
                    <div className="logo" alt="myLogo"></div>
                    <h3 className="name_company d-flex align-items-center font-weight-bold">
                        <span className="">CYBER</span>
                    </h3>
                </NavLink>

                {/* Menu left */}
                <div className="menuNavbar d-flex align-items-center">
                    <ul className="list-unstyled m-0">
                        <li>
                            <NavLink to="/introduce" className="link">
                                <span>Introduce</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/trips" className="link">
                                <span>Trips</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/support" className="link">
                                <span>Support</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/login" className="link">
                                <span>Login</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>

            </div>
        );
    }
}

export default NavbarLink;