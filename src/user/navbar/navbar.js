import React, {Component} from 'react';
import '../navbar/navbar.scss';

import ButtonResponsive from './button-responsive';

class Navbar extends Component {

    render() {
        return (
            <nav id="myNavbar" className="navbar navbar-expand-lg mt-3">
                <div className="container">
                    {/* Logo */}
                    <div className="myLogo">
                        <div
                            className="logo"
                            alt="myLogo">
                            <h4 className="name_company text-center">CYB</h4>
                        </div>
                    </div>
                    {/* Toggler/collapsibe Button */}
                    <div
                        id="navresponsive"
                        className="navbar-toggler"
                        data-toggle="collapse"
                    >
                        <ButtonResponsive/>
                    </div>
                    {/* Navbar links */}
                    <div className="collapse myMenu navbar-collapse" id="collapsibleNavbar">
                        <div className="navbar-nav d-flex justify-content-center w-100">
                            <div className="navbar-left">
                              <ul className="list-unstyled d-block">
                                <li className="link"> <span>Introduce</span> </li>
                                <li className="link"> <span>Trips</span> </li>
                              </ul>
                            </div>
                            <div className="navbar-right">
                              <ul className="list-unstyled d-block">
                                  <li className="link"> <span>Support</span> </li>
                                  <li className="link"> <span>Login</span> </li>
                              </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        );
    }
}

export default Navbar;